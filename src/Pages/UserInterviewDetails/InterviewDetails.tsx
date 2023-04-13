import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/CommonComponents/Header";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Switch,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
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
} from "../../Redux/ScheduledInterviewUser/Action";
import { GetAllScheduledInterView } from "../../Services/UserSideServices/GetAllScheduledInterviewServices/GetInterviewsServices";
import { useParams } from "react-router-dom";
import { interview } from "../UserDashboard/UserDashboard";
import {
  updateMeetingEndedStatusService,
  updateMeetingStartStatusService,
} from "../../Services/UserSideServices/UpdateMeetingStatusService/updateMeetingStatus";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
// import { convertMillseconds } from "../../utils/index";

import { postStudentNotes } from "../../Services/PostStudentNotesService/PostStudentNotesService";
import {
  pastInterviewFailure,
  pastInterviewLoading,
  pastInterviewSuccess,
} from "../../Redux/PastInterviewReducer/Action";
import { getAllPastInterviewService } from "../../Services/UserSideServices/GetAllPastInterviewServices/GetAllPastInterviewService";
import { getSingleInterview } from "../../Redux/InterviewByIdReducer/ActionCreators";

const InterviewDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [currentInterview, setCurrentInterview] = useState<interview>();
  const { id } = useParams();
  const [notes, setNotes] = useState<string>("");
  const interviews = useSelector(
    (state: RootState) => state.ScheduledInterviewReducer.interviews
  );
  const currentInterview = useSelector((state: RootState) => state.SingleInterviewReducer.interview);
  const pastInterviews =useSelector((state:RootState)=>state.PastInterViewReducer.interviews)
  const dispatch: Dispatch<
    | scheduledInterviewSuccess
    | scheduledInterviewLoading
    | scheduledInterviewFailure
  > = useDispatch();
  const pastdispatch: Dispatch<
    pastInterviewSuccess | pastInterviewLoading | pastInterviewFailure
  > = useDispatch();
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const userId: number = userDetails?.user?.id;
  const token: string = userDetails?.token;

  const handleStarted = async (
    interviewId: number,
    userId: number,
    token: string
  ) => {
    try {
      if (interviewId && userId) {
        const res = await updateMeetingStartStatusService(
          interviewId,
          userId,
          token
        );
        setIsStarted(res);
        console.log("jhj", res);
        GetAllScheduledInterView(userId, token)(dispatch);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleNote = async (
    interviewId: number,
    userId: number,
    token: string,
    notes: string
  ) => {
    try {
      const res = await postStudentNotes(interviewId, userId, token, notes);
      GetAllScheduledInterView(userId, token)(dispatch);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };
  console.log("notes", pastInterviews);

  const handleEnded = async (
    interviewId: number,
    userId: number,
    token: string
  ) => {
    try {
      if (interviewId && userId && token) {
        const res = await updateMeetingEndedStatusService(
          interviewId,
          userId,
          token
        );
        setIsEnded(res);
        GetAllScheduledInterView(userId, token)(dispatch);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetAllScheduledInterView(userId, token)(dispatch);
  }, [dispatch]);

  useEffect(() => {
    getAllPastInterviewService(userId, token)(pastdispatch);
  }, []);
  // useEffect(() => {
  //   if (id) {
  //     const tempInterview =
  //       interviews.length > 0 &&
  //       interviews.find((item: interview) => item.interviewId == Number(id));
  //     tempInterview && setCurrentInterview(tempInterview);
  //     console.log(tempInterview,"temp")
  //     if(tempInterview == undefined){
  //       const temp =pastInterviews.find((item: interview) => item.interviewId == Number(id));
  //       temp && setCurrentInterview(temp); 
  //     }
  //   }
    
  // }, [id, interviews, setCurrentInterview]);
  // getting date time to convert it in milisecond

  const interview = useSelector((state: RootState) => state.SingleInterviewReducer.interview);
useEffect(() => {
        getSingleInterview(id, token)(dispatch);
    }, [])
  
console.log(currentInterview,"sijdksdjs")
const time = Date.now();
    console.log(time);

    // getting date time to convert it in milisecond
    const date = currentInterview.date
    const startTime = currentInterview.startTime
    const endTime = currentInterview.endTime
    console.log(date, startTime, endTime);

    const starttime = `${date} ${startTime}`;
    const endtime = `${date} ${endTime}`

    function convertToMilliseconds(dateTimeString: string) {
        const [date, time] = dateTimeString.split(" ");
        const [day, month, year] = date.split("-");
        const [hours, minutes, seconds] = time.split(":");
        const milliseconds = Date.parse(`${month}-${day}-${year} ${hours}:${minutes}:${seconds}`);
        return milliseconds;
    }

    const miliStart = convertToMilliseconds(starttime);
    const miliEnd = convertToMilliseconds(endtime);
    console.log(miliStart, miliEnd, "milisecond start and end")

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
              <Table w={"100%"} variant={"striped"}>
                <Tbody>
                  <Tr>
                    <Td
                      textAlign={"left"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    ></Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      title
                    </Td>
                    <Td
                      textAlign={"left"}
                      color={"blue"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    >
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : currentInterview.title}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      textAlign={"left"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    ></Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Start Time
                    </Td>
                    <Td
                      textAlign={"left"}
                      color={"blue"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    >
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : convertTimeFormat(currentInterview.startTime)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      textAlign={"left"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    ></Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      End Time
                    </Td>
                    <Td
                      textAlign={"left"}
                      color={"blue"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    >
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : convertTimeFormat(currentInterview.endTime)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      textAlign={"left"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    ></Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      isStarted
                    </Td>
                    <Td
                      textAlign={"left"}
                      color={"blue"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    >
                      {" "}
                      {currentInterview.meetingStatus == "C" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Canceled...
                        </Text>
                      ) : miliStart >=
                          time &&
                        currentInterview.meetingStatus == "P" ? (
                        <Button
                          onClick={() =>
                            handleStarted(
                              currentInterview.interviewId,
                              userId,
                              token
                            )
                          }
                          colorScheme="blue"
                        >
                          Start
                        </Button>
                      ) :miliStart<=
                          time &&
                        currentInterview.meetingStatus == "IS" ? (
                        <Button
                          onClick={() =>
                            handleStarted(
                              currentInterview.interviewId,
                              userId,
                              token
                            )
                          }
                          colorScheme="blue"
                        >
                          Start
                        </Button>
                      ) : currentInterview.meetingStatus == "P" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          you can start the meet at start time
                        </Text>
                      ) : currentInterview.meetingStatus == "S" ? (
                        <Button disabled={true} colorScheme="blue">
                          Started
                        </Button>
                      ) : currentInterview.meetingStatus == "SS" ? (
                        <Button disabled={true} colorScheme="blue">
                          Started
                        </Button>
                      ) : (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          The meeting has already ended
                        </Text>
                      )}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      textAlign={"left"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    ></Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      isEnded
                    </Td>
                    <Td
                      textAlign={"left"}
                      color={"blue"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    >
                      {currentInterview.meetingStatus == "C" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Canceled
                        </Text>
                      ) : currentInterview.meetingStatus == "SE" ? (
                        <Button disabled={true} colorScheme="blue">
                          Ended
                        </Button>
                      ) : currentInterview.meetingStatus == "E" ? (
                        <Button disabled={true} colorScheme="blue">
                          Ended
                        </Button>
                      ) : 
                      miliEnd<=time &&
                        currentInterview.meetingStatus == "S" ? (
                        <Button
                          onClick={() =>
                            handleEnded(
                              currentInterview.interviewId,
                              userId,
                              token
                            )
                          }
                          colorScheme="blue"
                        >
                          End
                        </Button>
                      ) : (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          you can not end the meet before endtime
                        </Text>
                      )}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      textAlign={"left"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    ></Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Interviewer Name
                    </Td>
                    <Td
                      textAlign={"left"}
                      color={"blue"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    >
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : currentInterview.interviewerName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      textAlign={"left"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    ></Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Interviewee Name
                    </Td>
                    <Td
                      textAlign={"left"}
                      color={"blue"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    >
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : currentInterview.intervieweeName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      textAlign={"left"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    ></Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Meeting Status
                    </Td>
                    <Td textAlign={"left"}>
                      {Object.keys(currentInterview).length === 0 ? (
                        ""
                      ) : currentInterview.meetingStatus == "P" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Pending
                        </Text>
                      ) : currentInterview.meetingStatus === "C" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Canceled...
                        </Text>
                      ) : currentInterview.meetingStatus === "SS" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Started By Student
                        </Text>
                      ) : currentInterview.meetingStatus === "SE" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Ended By Student
                        </Text>
                      ) : currentInterview.meetingStatus == "IE" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Ended By Interviewer
                        </Text>
                      ) : currentInterview.meetingStatus == "IS" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Started By Interviewer
                        </Text>
                      ) : currentInterview.meetingStatus == "S" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Started
                        </Text>
                      ) : currentInterview.meetingStatus == "E" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Ended
                        </Text>
                      ) : (
                        ""
                      )}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      textAlign={"left"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    ></Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Notes
                    </Td>
                    <Td textAlign={"left"}>{currentInterview.studentNote}</Td>
                  </Tr>
                  <Tr>
                    <Td
                      textAlign={"left"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    ></Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Date
                    </Td>
                    <Td
                      textAlign={"left"}
                      color={"blue"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    >
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : currentInterview.date}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      textAlign={"left"}
                      fontSize={"17px"}
                      fontWeight={"500"}
                    ></Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Join Meeting
                    </Td>
                    <Td textAlign={"left"}>
                      <Link
                        to={`${
                          Object.keys(currentInterview).length !== 0 &&
                          currentInterview.meetingLink
                        }`}
                        target="_blank"
                      >
                        <Button colorScheme="blue">join meet</Button>
                      </Link>
                    </Td>
                  </Tr>
                  {currentInterview.meetingStatus == "S" ? (
                    <Tr>
                      <Td
                        textAlign={"left"}
                        fontSize={"17px"}
                        fontWeight={"500"}
                      ></Td>
                      <Td
                        textAlign={"left"}
                        fontSize={"17px"}
                        fontWeight={"500"}
                      >
                        Add Note
                      </Td>
                      <Td
                        textAlign={"left"}
                        color={"blue"}
                        fontSize={"17px"}
                        fontWeight={"500"}
                      >
                        <Box display={"flex"} w={"200px"} textAlign={"left"}>
                          <Button onClick={onOpen} colorScheme="blue">
                            Add Notes
                          </Button>

                          <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader>Add Notes</ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                                <Textarea
                                  onChange={(e) => {
                                    setNotes(e.target.value);
                                  }}
                                ></Textarea>
                              </ModalBody>

                              <ModalFooter>
                                <Button
                                  colorScheme="blue"
                                  mr={3}
                                  onClick={() =>
                                    handleNote(
                                      currentInterview.interviewId,
                                      userId,
                                      token,
                                      notes
                                    )
                                  }
                                >
                                  Add Note
                                </Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                        </Box>
                      </Td>
                    </Tr>
                  ) : currentInterview.meetingStatus=="IE"?<Tr>
                  <Td
                    textAlign={"left"}
                    fontSize={"17px"}
                    fontWeight={"500"}
                  ></Td>
                  <Td
                    textAlign={"left"}
                    fontSize={"17px"}
                    fontWeight={"500"}
                  >
                    Add Note
                  </Td>
                  <Td
                    textAlign={"left"}
                    color={"blue"}
                    fontSize={"17px"}
                    fontWeight={"500"}
                  >
                    <Box display={"flex"} w={"200px"} textAlign={"left"}>
                      <Button onClick={onOpen} colorScheme="blue">
                        Add Notes
                      </Button>

                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Add Notes</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Textarea
                              onChange={(e) => {
                                setNotes(e.target.value);
                              }}
                            ></Textarea>
                          </ModalBody>

                          <ModalFooter>
                            <Button
                              colorScheme="blue"
                              mr={3}
                              onClick={() =>
                                handleNote(
                                  currentInterview.interviewId,
                                  userId,
                                  token,
                                  notes
                                )
                              }
                            >
                              Add Note
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </Box>
                  </Td>
                </Tr>:""}
                </Tbody>
              </Table>
            )}
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default InterviewDetails;
