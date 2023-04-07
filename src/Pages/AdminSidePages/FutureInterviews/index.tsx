import Navbar from "../../../Components/Navbar/Navbar";
import React, { useCallback, useEffect, useState } from "react";
import DashboardNavbar from "../AdminDashBoard/DashboardNavbar";
import {
  Box,
  Grid,
  SkeletonCircle,

  SkeletonText,
  useToast,
} from "@chakra-ui/react";
import AdminInterviewBox from "../../../Components/AdminInterviews/InterviewsComponent";
import { GetFutureInterviewService } from "../../../Services/UserSideServices/GetInterviewsServices";
import { useLocation } from "react-router-dom";
import SearchComponent from "../../../Components/SearchComponent";
import { useSearch } from "../../../utils/SetParams";

const FutureInterviews = () => {
  const [futureInerviews, setfutureInerviews] = useState([]);
  const [search, updateSearch] = useSearch();
  const toast = useToast();
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const id = userDetails?.user?.id;
  const token = userDetails?.token;
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");

  const GetEvents = useCallback(async () => {
    try {
      const response = await GetFutureInterviewService(id, token);
      if (response.length) {
        setfutureInerviews(response.data);
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
  }, [id, token, toast]);

  useEffect(() => {
    GetEvents();
  }, [GetEvents]);

  return (
    <div className="container">
      <Navbar />
      <DashboardNavbar />
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
        <SearchComponent search={search} updateSearch={updateSearch} />

        {futureInerviews?.length <= 0 ? (
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
            {futureInerviews?.map((el) => (
              <Box key={el}>
                <AdminInterviewBox event={el} GetEvents={GetEvents} />
              </Box>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default FutureInterviews;
