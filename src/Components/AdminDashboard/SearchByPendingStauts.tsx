import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Grid,
  SkeletonCircle,
  SkeletonText,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useSearch } from "../../utils/SetParams";
import AdminInterviewBox from "../AdminInterviews/InterviewsComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { GetByPendingStatusService } from "../../Services/AdminSideServices/GetEventsService";
import Pagination from "./Pagination";
import { MdOutlineToken } from "react-icons/md";

const SearchByPendingStauts = ({ clearUrl, search, updateSearch }: any) => {
  const [colorScheme, setColorScheme] = useState({
    pending: "blue",
    compleated: "blue",
  });

  const [Interviews, setInterviews] = useState([]);
  const [PaginatedInterviewsData, setPaginatedInterviewsData] = useState([]);
  const [interviewStatus, setInterviewStatus] = useState("");
  const [status,setStatus] = useState("")
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages,setTotalPages] = useState(0)
  const [startIndex, setStartIndex] = useState<number>(1);
  const [endIndex, setEndIndex] = useState<number>();
  const toast = useToast();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageNumber = params.get("page");
  const meeting = params.get("meeting-status");
  const batchName = params.get("batch")
  const itemsPerPage = 1;
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const id = userDetails?.user?.id;
  const token = userDetails?.token;



  // set color to buttons even after refreshing
  const setColor = useCallback(() => {
    if (interviewStatus === "pending") {
      setColorScheme({ pending: "green", compleated: "blue" });
      setStatus("P")
    } else if (interviewStatus === "compleated") {
      setColorScheme({ pending: "blue", compleated: "green" });
      setStatus("E")
    } else {
      setColorScheme({ pending: "blue", compleated: "blue" });
    }
  }, [interviewStatus, setColorScheme]);

  //when getting from url params we should get values
  useEffect(() => {
    if (pageNumber) {
      const page = parseInt(pageNumber);
      setCurrentPage(page);
    }
    if (meeting) {
      setInterviewStatus(meeting);
    }
    setColor();
  }, [pageNumber, meeting, setColor, setCurrentPage]);


  // getting interviews based on pending and compleated when click on button
  const GetByPendingStatus = useCallback(async () => {
    try {
      const response = await GetByPendingStatusService(batchName,status,token);
      if (response.length) {
        setInterviews(response);
        setTotalPages(Math.ceil(response?.length/itemsPerPage));
      }else{
        setStartIndex(0)
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [ toast,token,batchName,status]);

  useEffect(() => {
    GetByPendingStatus();
  }, [GetByPendingStatus]);

 
  // set paginated data
  useEffect(() => {
    if (Interviews) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex);
      const Paginatedinterviewsdata = Interviews?.slice(startIndex, endIndex);
      if (endIndex > Interviews.length) {
        setEndIndex(Interviews.length);
      } else {
        setEndIndex(endIndex);
      }
      setPaginatedInterviewsData(Paginatedinterviewsdata);
    }
  }, [currentPage, itemsPerPage, Interviews]);


// when click clear button everything should be clear url filter values
  const Clear = () => {
    setColorScheme({ pending: "blue", compleated: "blue" });
    updateSearch({});
    setInterviewStatus("");
    setCurrentPage(1);
    clearUrl();
    setInterviews([]);
  };

  // changing colors for button when click on pending and comleated
  const searchForPending = (val: string) => {
    setInterviewStatus(val);
    if (interviewStatus === "pending") {
      GetByPendingStatus()
      setColorScheme({ pending: "green", compleated: "blue" });
    } else {
      GetByPendingStatus()
      setColorScheme({ pending: "blue", compleated: "green" });
    }

    updateSearch({
      ...search,
      "meeting-status": val,
    });
  };

  // for handling page buttn value
  const handlePageChange = (page: any) => {
    updateSearch({
      ...search,
      page: page,
    });
  };

  return (
    <div>
      <Box
        w="80%"
        ml="10%"
        mt="30px"
        minH="200px"
        h="auto"
        p="2%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <Flex justifyContent="flex-end">
          <FormLabel mr="20px" mt="7px">
            Meeting Status :-{" "}
          </FormLabel>
          <Button
            colorScheme={colorScheme.pending}
            fontSize={{ base: "12px", sm: "16px", md: "16px", lg: "16px" }}
            onClick={() => searchForPending("pending")}
          >
            Pending
          </Button>
          <Button
            colorScheme={colorScheme.compleated}
            fontSize={{ base: "12px", sm: "16px", md: "16px", lg: "16px" }}
            ml="20px"
            onClick={() => searchForPending("compleated")}
          >
            Compleated
          </Button>
          <Button
            ml="20px"
            colorScheme="blue"
            fontSize={{ base: "12px", sm: "16px", md: "16px", lg: "16px" }}
            onClick={Clear}
          >
            Clear
          </Button>
        </Flex>
        <Divider mt="10px" mb="10px" />
        {PaginatedInterviewsData?.length <= 0 ? (
          <Box>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        ) : (
          <Grid
            mt={4}
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr 1fr",
              lg: "1fr 1fr 1fr",
            }}
            gap={4}
          >
            {PaginatedInterviewsData?.map((el) => (
              <Box key={el}>
                <AdminInterviewBox event={el} GetEvents={GetByPendingStatus} />
              </Box>
            ))}
          </Grid>
        )}
      </Box>
      <Box w="80%" ml="10%" mt="30px">
        <Box mt="20px" display="flex" justifyContent="space-between">
          <Text ml="30px">
            Showing {startIndex} to {endIndex} of {Interviews?.length} results
          </Text>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={handlePageChange}
            setPage={setCurrentPage}
            interviewsData={Interviews}
            setPaginatedData={setPaginatedInterviewsData}
            perPage={1}
          />
        </Box>
      </Box>
    </div>
  );
};

export default SearchByPendingStauts;
