import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/CommonComponents/Header";
import React, { useEffect, useState } from "react";
import { Box, Flex, Switch, Text, Textarea } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { SchecduledInterviewState } from "../../Redux/ScheduledInterviewUser/Reducer";
import { RootState } from "../../Redux/store";
import { Dispatch } from "redux";
import { scheduledInterviewFailure, scheduledInterviewLoading, scheduledInterviewSuccess } from "@/Redux/ScheduledInterviewUser/Action";
import { GetAllScheduledInterView } from "../../Services/UserSideServices/GetInterviewsServices";
import { useParams } from "react-router-dom";
import { interview } from "../UserDashboard/UserDashboard";

const InterviewDetails = () => {
  const [currentInterview,setCurrentInterview] =useState<interview>();
  const {id} =useParams()
  const interviews = useSelector((state:RootState)=>state.ScheduledInterviewReducer.interviews);
  const dispatch:Dispatch<scheduledInterviewSuccess | scheduledInterviewLoading |scheduledInterviewFailure>= useDispatch();
  useEffect(()=>{
    
        GetAllScheduledInterView()(dispatch)
    
  },[dispatch])
  
  useEffect(()=>{
      if(id){
        const tempInterview = interviews.length>0 && interviews.find((item:interview)=> item.interviewId == Number(id))
       tempInterview && setCurrentInterview(tempInterview)
      }
  },[id,interviews,setCurrentInterview])

  console.log("current",currentInterview)
  return (
    <div>
      <Navbar />
      <Header title={"Details"} buttonName={"Back"} />
      <main>
        <Box bgColor={"#fafafa"} p={"20px"}>
          <Box  w={"75%"} m={"auto"} bg={"white"} mt={"20px"}>
            {currentInterview && (<Flex justifyContent={"space-between"} alignItems={"center"}>
              <Box h={"auto"} w={"45%"}  >
                <Box  w={"80%"} m={"auto"} h={"100%"}>
                  <Box
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                     Title
                    </Text>
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Interview Schedule Time
                    </Text>
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Duration of Interview
                    </Text>
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      color={"indigo"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                    >
                      Name of Interviewer
                    </Text>
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Is Interview Started
                    </Text>
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Is InterView Ended
                    </Text>
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"17%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                   
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                      mt={"10px"}
                    >
                      Notes
                    </Text>
                  </Box>
                  <Box
                  
                    m={"auto"}
                    h={"10%"}
                    pt={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                    mt={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Link of Interview
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box h={"auto"} w={"45%"}  >
              <Box w={"80%"} m={"auto"} h={"100%"}>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"17px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                     {Object.keys(currentInterview).length===0?"":currentInterview.title}
                    </Text>
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"15px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      {Object.keys(currentInterview).length===0?"":currentInterview.startTime}
                    </Text>
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"15px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Duration of interview
                    </Text>
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"15px"}
                      color={"indigo"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                    >
                     {Object.keys(currentInterview).length===0?"":currentInterview.interviewerName}
                    </Text>
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Switch colorScheme="blue" size={"md"} />
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Switch colorScheme="blue" size={"md"} />
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"17%"}
                    textAlign={"center"}
                    
                  >
                    <Textarea size={"xs"} />
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"10%"}
                    textAlign={"center"}
                    pl={"20px"}
                    pt="10px"
                    
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      {Object.keys(currentInterview).length===0?"":currentInterview.meetingLink}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Flex>)}
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default InterviewDetails;
