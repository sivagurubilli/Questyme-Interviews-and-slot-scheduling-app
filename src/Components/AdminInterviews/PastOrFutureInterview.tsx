
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Grid,
  SkeletonCircle,

  SkeletonText,
  Text,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import AdminInterviewBox from "./InterviewsComponent";
import { useLocation } from "react-router-dom";
import SearchComponent from "../SearchComponent";
import { useSearch } from "../../utils/SetParams";
import Pagination from "../AdminDashboard/Pagination";
import { Iinterviews } from "../../Services/AdminSideServices/GetEventsInterface";
import { GetFutureInterviewService, GetPastInterviewService } from "../../Services/UserSideServices/GetInterviewsServices";
import OneonOneEventComponent from "../OneonOneEventComponent";

const FutureOrPastInterviewsComponent = ( ) => {
  const [futureInterviews, setfutureInterviews] = useState<Iinterviews[]>([]);
  const [allData,setAllData] = useState<Iinterviews[]>([]);
  const [PaginatedInterviewsData,setPaginatedInterviewsData] = useState<Iinterviews[]>([])
  const [searchName,setSearchName] = useState("")
  const [search, updateSearch] = useSearch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [startIndex, setStartIndex] = useState<number>(1);
  const [endIndex, setEndIndex] = useState<number>();
  const toast = useToast();
  const location = useLocation();
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const id = userDetails?.user?.id;
  const token = userDetails?.token;
  const itemsPerPage =1
  const path = window.location.pathname;
  const segments = path.split('/');
  const InterviewsValueUrl= segments[segments.length - 1];
 
    const GetPagination =useCallback(()=>{
  if (futureInterviews) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  setStartIndex(startIndex + 1);
  setEndIndex(endIndex);
  const Paginatedinterviewsdata = futureInterviews?.slice(startIndex, endIndex);
  if (endIndex > futureInterviews.length) {
    setEndIndex(futureInterviews.length);
  } else {
    setEndIndex(endIndex);
  }
  setPaginatedInterviewsData(Paginatedinterviewsdata);
}
  },[currentPage, itemsPerPage, futureInterviews])

  useEffect(() => {
    GetPagination()
  }, [GetPagination]);

  //function for filter data 
  useEffect(()=>{
if(searchName){
    const interviews = allData.filter((el:any)=>el?.title.includes(searchName))
    setfutureInterviews(interviews)
  }
},[allData,searchName])
  

// get interviews data
  const GetEvents = useCallback(async () => {
    try {
        var response;
     if(InterviewsValueUrl==="future-interviews"){
        response = await GetFutureInterviewService(id,token)
     }else if(InterviewsValueUrl==="past-interviews"){
        response = await GetPastInterviewService(id,token)  
     }
     if(response.length){
        setAllData(response);
        setfutureInterviews(response)
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
  }, [id, token, toast,InterviewsValueUrl]);

 
  useEffect(() => {
    GetEvents();
  }, [GetEvents]);

  useEffect(()=>{
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    if(name){
  setSearchName(name)
    }
  },[setSearchName,searchName,location.search])
  
   // for handling page buttn value
   const handlePageChange = (page: any) => {
    updateSearch({
      ...search,
      page: page,
    });
  };


  return (
    <div className="container">
    
      <Box
        w="80%"
        ml="10%"
        mt="60px"
        minH="200px"
        h="auto"
        p="5%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <SearchComponent value={searchName} search={search} updateSearch={updateSearch} />

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
              <Box key={el.interviewId}>
                {InterviewsValueUrl ==="one-on-one-interviews" ? 
                (<OneonOneEventComponent event={el} GetEvents={GetEvents} />)
                :(
                <AdminInterviewBox event={el} GetEvents={GetEvents} />)}
              </Box>
            ))}
          </Grid>
        )}
      </Box>

      <Box w="80%" ml="10%" mt="30px">
        <Box mt="20px" display="flex" justifyContent="space-between">
          <Text ml="30px">
            Showing {startIndex} to {endIndex} of {futureInterviews?.length} results
          </Text>
          <Pagination
            currentPage={currentPage}
            totalPages={3}
            onChange={handlePageChange}
            setPage={setCurrentPage}
            interviewsData={futureInterviews}
            setPaginatedData={setPaginatedInterviewsData}
            perPage={1}
          />
        </Box>
      </Box>
    </div>
  );
};

export default FutureOrPastInterviewsComponent;
