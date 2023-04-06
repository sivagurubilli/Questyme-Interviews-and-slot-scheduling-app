import Navbar from "../../../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import {
  Box,
  Grid,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import AdminInterviewBox from "../../../Components/AdminInterviews/InterviewsComponent";
import { GetFutureInterviewService } from "../../../Services/UserSideServices/GetInterviewsServices";
import { useLocation } from "react-router-dom";
import SearchComponent from "../../../Components/SearchComponent";
import { useSearch } from "../../../utils/SetParams";

const AdminDashBoard = () => {
  const [futureInerviews, setfutureInerviews] = useState([]);
  const [search, updateSearch] = useSearch();
  const toast = useToast();
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
const id =userDetails?.user?.id
const token = userDetails?.token
const location = useLocation();
const params = new URLSearchParams(location.search);
const name = params.get('name');


  useEffect(() => {
    GetEvents();
  }, []);

  const GetEvents = async () => {
    try {
      const response = await GetFutureInterviewService(id,token);
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
  };




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

        <Grid
          mt={4}
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          gap={4}
        >
          {futureInerviews?.length > 0 ? (
            futureInerviews?.map((el) => (
              <Box key={el}>
                <AdminInterviewBox event={el} GetEvents={GetEvents} />
              </Box>
            ))
          ) : (
          <Spinner ml="400px" mt="50px" p="20px" size="xl" color="blue.500" />
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default AdminDashBoard;
