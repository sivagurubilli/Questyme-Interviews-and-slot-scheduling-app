import Navbar from "../../../Components/Navbar/Navbar";
import React, { useCallback, useEffect, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import {
  Box,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import SearchByBatch from "../../../Components/AdminDashboard/SearchByBatch";
import SearchByPendingStauts from "../../../Components/AdminDashboard/SearchByPendingStauts";
import {  CountByMeetingStatusService } from "../../../Services/AdminSideServices/GetEventsService";
import { useSearch } from "../../../utils/SetParams";
import { useLocation, useNavigate } from "react-router-dom";




const AdminDashBoard = () => {

  const [totalInterviews, setTotalInterviews] = useState({
    totalInterviews: 0,
    results: [
      {
        meetingStatus: "",
        count: 0,
      },
      {
        meetingStatus: "",
        count: 0,
      },
    ],
  });
  const [search, updateSearch] = useSearch();
 const [batchName,setBatchName] = useState<string | null>("")

const navigate = useNavigate()
const location = useLocation();
const params = new URLSearchParams(location.search);
const name = params.get("batch");
const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
const id = userDetails?.user?.id;
const token = userDetails?.token;
const toast = useToast();


  useEffect(()=>{
    setBatchName(name)
   },[name])
   

  const GetEvents = useCallback(async () => {
    try {
      const response = await CountByMeetingStatusService(id, token); 
      if (response.results) {
        setTotalInterviews(response);
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
  }, [toast]);

  useEffect(() => {
    GetEvents();
  }, [GetEvents]);

  
const clearUrl =()=>{
  navigate("")
  setBatchName("")
}
 

  return (
    <div className="container">
      <Navbar />
      <DashboardNavbar />
      <Box
        w="80%"
        ml="10%"
        mt="30px"
        minH="120px"
        h="auto"
        p="3%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
     <Box w="60%" ml="20%">
  <Flex justifyContent="space-between">
    <Text>Total Interviews </Text> <Text>{totalInterviews?.totalInterviews}</Text>
  </Flex>
  { totalInterviews?.results && totalInterviews?.results?.map((el:any) => (
    el.meetingStatus === "E" ? (
      <Flex justifyContent="space-between">
        <Text>Interviews Completed </Text> <Text>{el.count}</Text>
      </Flex>
    ) : (
      <Flex justifyContent="space-between">
        <Text>Interviews Pending </Text> <Text>{el.count}</Text>
      </Flex>
    )
  ))}
</Box>

      </Box>
      {/* search by batch name component */}
      <SearchByBatch batchName={batchName} setBatchName={setBatchName} />
      {/* search by batch name and  pendingstaus component */}
      <SearchByPendingStauts 
      clearUrl ={clearUrl}
    search={search} updateSearch={updateSearch}
       />    
    </div>
  );
};

export default AdminDashBoard;
