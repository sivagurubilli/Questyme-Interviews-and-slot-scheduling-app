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
} from "@/Redux/ScheduledInterviewUser/Action";
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
import { postStudentNotes } from "../../Services/PostStudentNotesService/PostStudentNotesService";
const InterviewDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentInterview, setCurrentInterview] = useState<interview>();
  const { id } = useParams();
  const [notes, setNotes] = useState<string>("");
  const interviews = useSelector(
    (state: RootState) => state.ScheduledInterviewReducer.interviews
  );
  const dispatch: Dispatch<
    | scheduledInterviewSuccess
    | scheduledInterviewLoading
    | scheduledInterviewFailure
  > = useDispatch();
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const userId: number = userDetails?.user?.id;
  const token: string = userDetails?.token;
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time);

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
    } catch (err) {
      console.log(err);
    }
  };
  console.log("notes", notes);
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
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetAllScheduledInterView(userId, token)(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      const tempInterview =
        interviews.length > 0 &&
        interviews.find((item: interview) => item.interviewId == Number(id));
      tempInterview && setCurrentInterview(tempInterview);
    }
  }, [id, interviews, setCurrentInterview]);

  console.log("current", currentInterview, time);
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
              <Table  w={"100%"}>
                <Tbody>
                  <Tr >
                    <Td textAlign={"left"}   fontSize={"17px"} fontWeight={"500"}>
                      1
                    </Td>
                    <Td  textAlign={"left"}  fontSize={"17px"} fontWeight={"500"}>
                      title
                    </Td>
                    <Td  textAlign={"left"} color={"blue"} fontSize={"17px"} fontWeight={"500"}>
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : currentInterview.title}
                    </Td>
                  </Tr>
                  <Tr >
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      2
                    </Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Start Time
                    </Td>
                    <Td textAlign={"left"}  color={"blue"} fontSize={"17px"} fontWeight={"500"}>
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : convertTimeFormat(currentInterview.startTime)}
                    </Td>
                  </Tr>
                  <Tr >
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      3
                    </Td>
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      End Time
                    </Td>
                    <Td  textAlign={"left"}  color={"blue"} fontSize={"17px"} fontWeight={"500"}>
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : convertTimeFormat(currentInterview.endTime)}
                    </Td>
                  </Tr>
                  <Tr >
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      4
                    </Td>
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      isStarted
                    </Td>
                    <Td  textAlign={"left"}  color={"blue"} fontSize={"17px"} fontWeight={"500"}>
                      {" "}
                      {currentInterview.meetingStatus == "C" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Canceled...
                        </Text>
                      ) : currentInterview.startTime <= time &&
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
                      ) : currentInterview.meetingStatus == "P" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          you can start the meet at start time
                        </Text>
                      ) : currentInterview.meetingStatus == "SS" || "S" ? (
                        <Button disabled={true} colorScheme="blue">
                          Started
                        </Button>
                      ) : (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          you can start the on start time
                        </Text>
                      )}
                    </Td>
                  </Tr>
                  <Tr >
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      5
                    </Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      isEnded
                    </Td>
                    <Td textAlign={"left"}  color={"blue"} fontSize={"17px"} fontWeight={"500"}>
                      {currentInterview.meetingStatus == "C" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          Canceled...
                        </Text>
                      ) : currentInterview.meetingStatus == "SE" ||
                        "E" ||
                        "IE" ? (
                        <Button disabled={true} colorScheme="blue">
                          Ended
                        </Button>
                      ) : currentInterview.endTime == time &&
                        currentInterview.meetingStatus == "SS" ? (
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
                      ) : (currentInterview.endTime == time &&
                          currentInterview.meetingStatus == "S") ||
                        "SS" ? (
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
                      ) : currentInterview.meetingStatus == "S" || "SS" ? (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          you can end the meet at end time
                        </Text>
                      ) : currentInterview.meetingStatus == "SE" ||
                        "E" ||
                        "IE" ? (
                        <Button disabled={true} colorScheme="blue">
                          Ended
                        </Button>
                      ) : (
                        <Text
                          color={"blue"}
                          fontSize={"17px"}
                          fontWeight={"500"}
                        >
                          you can ent the meet at end time
                        </Text>
                      )}
                    </Td>
                  </Tr>
                  <Tr >
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      6
                    </Td>
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Interviewer Name
                    </Td>
                    <Td textAlign={"left"}  color={"blue"} fontSize={"17px"} fontWeight={"500"}>
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : currentInterview.interviewerName}
                    </Td>
                  </Tr>
                  <Tr >
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      7
                    </Td>
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Interviewee Name
                    </Td>
                    <Td  textAlign={"left"}  color={"blue"} fontSize={"17px"} fontWeight={"500"}>
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : currentInterview.intervieweeName}
                    </Td>
                  </Tr>
                  <Tr >
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      8
                    </Td>
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Meeting Status
                    </Td>
                    <Td  textAlign={"left"}>
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
                        <Text  color={"blue"} fontSize={"17px"} fontWeight={"500"}>Started</Text>
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
                  <Tr >
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      9
                    </Td>
                    <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                     Notes
                    </Td>
                    <Td  textAlign={"left"}>
                    {currentInterview.meetingStatus == "S" ? (
                      <Box
                        display={"flex"}
                        
                        w={"200px"}
                        textAlign={"left"}
                      >
                        <Button
                          onClick={onOpen}
                          
                          colorScheme="blue"
                        >
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
                    ) : currentInterview.meetingStatus == "SE" ? (
                      `${currentInterview.studentNote}`
                    ) : currentInterview.meetingStatus == "E" ? (
                      `${currentInterview.studentNote}`
                    ) : currentInterview.meetingStatus == "SS" ? (
                      <Box
                        display={"flex"}
                        w={"200px"}
                        textAlign={"center"}
                      >
                        <Button
                          onClick={onOpen}
                          colorScheme="blue"
                        >
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
                    ) : (
                      `${currentInterview.studentNote}`
                    )}
                    </Td>
                  </Tr>
                  <Tr >
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      10
                    </Td>
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Date
                    </Td>
                    <Td  textAlign={"left"}  color={"blue"} fontSize={"17px"} fontWeight={"500"}>
                      {Object.keys(currentInterview).length === 0
                        ? ""
                        : currentInterview.date}
                    </Td>
                  </Tr>
                  <Tr >
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      11
                    </Td>
                    <Td  textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                      Join Meeting
                    </Td>
                    <Td  textAlign={"left"}>
                    <Link
                      to={`${
                        Object.keys(currentInterview).length === 0
                          ? "#"
                          : currentInterview.meetingStatus == "SE" ||
                            "E" ||
                            "IE" ||
                            "C"
                          ? "#"
                          : currentInterview.meetingLink
                      }`}
                    >
                      <Button
                        colorScheme="blue"
                        disabled={
                          currentInterview.meetingStatus == "SE"
                            ? false
                            : currentInterview.meetingStatus == "E"
                            ? false
                            : true
                        }
                      >
                        join meet
                      </Button>
                    </Link>
                    </Td>
                  </Tr>
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
