import React, { useEffect, useState } from "react";
import { Box, Grid, useToast } from "@chakra-ui/react";
import SearchComponent from "../../../Components/SearchComponent";
import Navbar from "../../../Components/Navbar/Navbar";
import DashboardNavbar from "../AdminDashBoard/DashboardNavbar";
import AdminInterviewBox from "../../../Components/AdminInterviews/InterviewsComponent";
import { GetPastInterviewService } from "../../../Services/UserSideServices/GetInterviewsServices";

const PastInterviews = () => {
  const [pastInterviews, setpastInterviews] = useState([]);
  const toast = useToast();
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
const id =userDetails.user.id
const token = userDetails.token

  useEffect(() => {
    GetEvents();
  }, []);

  const GetEvents = async () => {
    try {
      const response = await GetPastInterviewService(id,token);
      if (response) {
        setpastInterviews(response);
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
        <SearchComponent />

        <Grid
          mt={4}
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          gap={4}
        >
          {pastInterviews.length && pastInterviews?.map((el) => (
            <Box key={el}>


              <AdminInterviewBox  event={el} GetEvents={GetEvents} />
            </Box>
          ))}

         
        </Grid>
      </Box>
    </div>
  );
};

export default PastInterviews;