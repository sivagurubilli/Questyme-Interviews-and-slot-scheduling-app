import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/CommonComponents/Header";
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Switch, Text, Textarea } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { SchecduledInterviewState } from "../../Redux/ScheduledInterviewUser/Reducer";
import { RootState } from "../../Redux/store";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";
import { convertTimeFormat } from "../../utils/index";
import {
  scheduledInterviewFailure,
  scheduledInterviewLoading,
  scheduledInterviewSuccess,
} from "@/Redux/ScheduledInterviewUser/Action";
import { GetAllScheduledInterView } from "../../Services/UserSideServices/GetAllScheduledInterviewServices/GetInterviewsServices";
import { useParams } from "react-router-dom";
import { interview } from "../UserDashboard/UserDashboard";
import { updateMeetingStartStatusService } from "../../Services/UserSideServices/UpdateMeetingStatusService/updateMeetingStatus";

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
  const [isStarted,setIsStarted] = useState(false)
  const [isEnded,setIsEnded] =useState(false)
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const userId: number = userDetails?.user?.id;
  const token: string = userDetails?.token;
  useEffect(() => {
    GetAllScheduledInterView(userId, token)(dispatch);
  }, [dispatch]);

  const handleStarted =async(interviewId:number,userId:number,token:string)=>{
    try{
      if(interviewId && userId){
        const res =await updateMeetingStartStatusService(interviewId,userId,token);
        console.log("jhj",res)
      }
    }
    catch(err){
        console.log(err)
    }
  }

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
          >
            {currentInterview && (
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"5px"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"60px"}
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    m={"auto"}
                    textAlign={"left"}
                    w={"20%"}
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
                    w={"70%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        :currentInterview.title}
                    </Text>
                  </Box>
                </Box>
                <Box
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"60px"}
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    m={"auto"}
                    textAlign={"left"}
                    w={"20%"}
                  >
                    <Text
                      mt={"6px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Start Time
                    </Text>
                  </Box>
                  <Box
                    w={"70%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : convertTimeFormat(currentInterview.startTime)}
                    </Text>
                  </Box>
                </Box>
                <Box
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"60px"}
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    m={"auto"}
                    textAlign={"left"}
                    w={"20%"}
                  >
                    <Text
                      mt={"6px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      End Time
                    </Text>
                  </Box>
                  <Box
                    w={"70%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : convertTimeFormat(currentInterview.endTime)}
                    </Text>
                  </Box>
                </Box>
                <Box
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"60px"}
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    m={"auto"}
                    textAlign={"left"}
                    w={"20%"}
                  >
                    <Text
                      mt={"6px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Is Started
                    </Text>
                  </Box>
                  <Box
                    w={"70%"}
                    textAlign={"center"}
                  >
                    <Switch onChange={()=>handleStarted(currentInterview.interviewId,userId,token)} isChecked={isStarted} />
                  </Box>
                </Box>
                <Box
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"60px"}
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    m={"auto"}
                    textAlign={"left"}
                    w={"20%"}
                  >
                    <Text
                      mt={"6px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Is Ended
                    </Text>
                  </Box>
                  <Box
                    w={"70%"}
                    textAlign={"center"}
                  >
                    <Switch />
                  </Box>
                </Box>
                <Box
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"60px"}
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    m={"auto"}
                    textAlign={"left"}
                    w={"20%"}
                  >
                    <Text
                      mt={"6px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Interviewer
                    </Text>
                  </Box>
                  <Box
                    w={"70%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : currentInterview.interviewerName}
                    </Text>
                  </Box>
                </Box>
                <Box
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"60px"}
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    m={"auto"}
                    textAlign={"left"}
                    w={"20%"}
                  >
                    <Text
                      mt={"6px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Interviewee
                    </Text>
                  </Box>
                  <Box
                    w={"70%"}
                    textAlign={"center"}
                  >
                    <Text
                      mt={"8px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      color={"red"}
                    >
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : currentInterview.intervieweeName}
                    </Text>
                  </Box>
                </Box>
                <Box
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"60px"}
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    m={"auto"}
                    textAlign={"left"}
                    w={"20%"}
                  >
                    <Text
                      mt={"6px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Meeting Status
                    </Text>
                  </Box>
                  <Box
                    w={"70%"}
                    textAlign={"center"}
                  >
                    {Object.keys(currentInterview).length===0?"":currentInterview.meetingStatus==="P"?<Text>Pending</Text>:currentInterview.meetingStatus==="C"?<Text>Cancel</Text>:currentInterview.meetingStatus==="S"?<Text>Started</Text>:currentInterview.meetingStatus==="E"?<Text>Ended</Text>:""}
                  </Box>
                </Box>
                <Box
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"auto"}
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    m={"auto"}
                    textAlign={"left"}
                    w={"20%"}
                  >
                    <Text
                      mt={"6px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Notes
                    </Text>
                  </Box>
                  <Box
                    w={"70%"}
                    textAlign={"center"}
                  >
                    <Textarea></Textarea>
                  </Box>
                </Box>
                <Box
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"60px"}
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    m={"auto"}
                    textAlign={"left"}
                    w={"20%"}
                  >
                    <Text
                      mt={"6px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Cancel Meet
                    </Text>
                  </Box>
                  <Box
                    w={"70%"}
                    textAlign={"center"}
                  >
                    <Button colorScheme="blue">Cancel Meet</Button>
                  </Box>
                </Box>
                <Box
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"60px"}
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box
                    m={"auto"}
                    textAlign={"left"}
                    w={"20%"}
                  >
                    <Text
                      mt={"6px"}
                      color={"black"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      Join Meeting
                    </Text>
                  </Box>
                  <Box
                    w={"70%"}
                    textAlign={"center"}
                  >
                    <Link
                      to={`${
                        Object.keys(currentInterview).length === 0
                          ? "#"
                          : currentInterview.intervieweeName
                      }`}
                    >
                      <Button colorScheme="blue">join meet</Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default InterviewDetails;
