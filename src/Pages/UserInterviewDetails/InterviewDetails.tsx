import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/CommonComponents/Header";
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Switch, Text, Textarea } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { SchecduledInterviewState } from "../../Redux/ScheduledInterviewUser/Reducer";
import { RootState } from "../../Redux/store";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";
import {
  scheduledInterviewFailure,
  scheduledInterviewLoading,
  scheduledInterviewSuccess,
} from "@/Redux/ScheduledInterviewUser/Action";
import { GetAllScheduledInterView } from "../../Services/UserSideServices/GetAllScheduledInterviewServices/GetInterviewsServices";
import { useParams } from "react-router-dom";
import { interview } from "../UserDashboard/UserDashboard";

const InterviewDetails = () => {
  const [currentInterview, setCurrentInterview] = useState<interview>();
  const { id } = useParams();
  const interviews = useSelector(
    (state: RootState) => state.ScheduledInterviewReducer.interviews
  );
  const dispatch: Dispatch<
    | scheduledInterviewSuccess
    | scheduledInterviewLoading
    | scheduledInterviewFailure
  > = useDispatch();
  useEffect(() => {
    GetAllScheduledInterView()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      const tempInterview =
        interviews.length > 0 &&
        interviews.find((item: interview) => item.interviewId == Number(id));
      tempInterview && setCurrentInterview(tempInterview);
    }
  }, [id, interviews, setCurrentInterview]);

  console.log("current", currentInterview);
  return (
    <div>
      <Navbar />
      <Header title={"Details"} buttonName={"Back"} />
      <main>
        <Box bgColor={"#fafafa"} p={"20px"}>
          <Box
            w={"75%"}
            m={"auto"}
            bg={"white"}
            mt={"20px"}
            p={"50px"}
            borderRadius={"10px"}
            bgColor={"white"}
            border={"1px solid black"}
          >
            {currentInterview && (
              <Flex
                flexDirection={"column"}
                gap={"5px"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Flex
                  
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"60px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box
                   
                    w={"30%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"6px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Title
                    </Text>
                  </Box>
                  <Box
                    
                    w={"60%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      {Object.keys(currentInterview).length===0?"":currentInterview.title}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"65px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box
                    
                    w={"30%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Start Time
                    </Text>
                  </Box>
                  <Box
                    
                    w={"60%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      {Object.keys(currentInterview).length===0?"":currentInterview.startTime}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"65px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box
                    
                    w={"30%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      End Time
                    </Text>
                  </Box>
                  <Box
                    
                    w={"60%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      {Object.keys(currentInterview).length===0?"":currentInterview.endTime}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                 
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"65px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box
                   
                    w={"30%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Category
                    </Text>
                  </Box>
                  <Box
                  
                    w={"60%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      {Object.keys(currentInterview).length===0?"":currentInterview.category}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"65px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box
                    
                    w={"30%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Interviewee Name
                    </Text>
                  </Box>
                  <Box
                   
                    w={"60%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                     {Object.keys(currentInterview).length===0?"":currentInterview.intervieweeName}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"65px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box
                    
                    w={"30%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Interviewer Name
                    </Text>
                  </Box>
                  <Box
                    
                    w={"60%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      {Object.keys(currentInterview).length===0?"":currentInterview.interviewerName}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"65px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box
                  
                    w={"30%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Is Started
                    </Text>
                  </Box>
                  <Box
                
                    w={"60%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      <Switch />
                    </Text>
                  </Box>
                </Flex>
                <Flex
                
                borderRadius={"10px"}
                w={"100%"}
                h={"65px"}
                p={"10px"}
                justifyContent={"space-between"}
              >
                <Box
                  
                  w={"30%"}
                  textAlign={"center"}
                >
                  <Text
                    mt={"8px"}
                    color={"black"}
                    fontSize={"18px"}
                    fontWeight={"500"}
                  >
                   is Ended
                  </Text>
                </Box>
                <Box
                  
                  w={"60%"}
                  textAlign={"center"}
                >
                  <Text
                    mt={"8px"}
                    fontSize={"18px"}
                    fontWeight={"500"}
                    color={"red"}
                  >
                    <Switch/>
                  </Text>
                </Box>
              </Flex>
                <Flex
                  
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"65px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box
                  
                    w={"30%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Meeting Status
                    </Text>
                  </Box>
                  <Box
                 
                    w={"60%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      <Switch />
                    </Text>
                  </Box>
                </Flex>
                <Flex
                 
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"65px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box
                  
                    w={"30%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Student Batch
                    </Text>
                  </Box>
                  <Box
                    
                    w={"60%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      {Object.keys(currentInterview).length===0?"":currentInterview.batch}
                    </Text>
                  </Box>
                </Flex>
                <Flex
                 
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"65px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box
           
                    w={"30%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Notes
                    </Text>
                  </Box>
                  <Box
              
                    w={"60%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      notes
                    </Text>
                  </Box>
                </Flex>
                <Flex
                
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"65px"}
                  p={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box
                    
                    w={"30%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                     Join Meeting
                    </Text>
                  </Box>
                  <Box
                    
                    w={"60%"}
                    textAlign={"center"}
                  >
                   <Link to={`${Object.keys(currentInterview).length===0?"":currentInterview.meetingLink}`}><Button colorScheme="blue" >Join Meet</Button></Link>
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            )}
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default InterviewDetails;
