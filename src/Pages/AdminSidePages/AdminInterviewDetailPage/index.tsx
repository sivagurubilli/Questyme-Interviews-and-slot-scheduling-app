import Navbar from "../../../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import DetailPageNav from "./InterviewDetailPageNav";
import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SkeletonCircle, SkeletonText, Switch, Table, Tbody, Td, Text, Textarea, Tr, useDisclosure } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleInterview } from "../../../Redux/InterviewByIdReducer/ActionCreators";
import { RootState } from "../../../Redux/store";
import { convertTimeFormat } from "../../../utils/index";
import { updateMeetingEndedStatusService, updateMeetingStartStatusService } from "../../../Services/UserSideServices/UpdateMeetingStatusService/updateMeetingStatus";
import { postAdminFeedback } from "../../../Services/PostAdminFeedbackService/PostAdminFeedbackService";

const AdminInterviewDetailPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams<string>();
    const token = useSelector((state: RootState) => state.AuthReducer.token)
    const user = useSelector((state: RootState) => state.AuthReducer.user)
    const userId = user.id;
    const interview = useSelector((state: RootState) => state.SingleInterviewReducer.interview);
    const isLoading = useSelector((state: RootState) => state.SingleInterviewReducer.isLoading);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [feedback, setFeedback] = useState("");
    const showfeedback = decodeURI(interview.adminFeedback);
    console.log(showfeedback);

    useEffect(() => {
        getSingleInterview(id, token)(dispatch);
    }, [])

    const time = Date.now();
    console.log(time);

    // getting date time to convert it in milisecond
    const date = interview.date
    const startTime = interview.startTime
    const endTime = interview.endTime
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

    // on starting the meeting 
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
                console.log("jhj", res);
                getSingleInterview(id, token)(dispatch);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // on ending the meeting
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
                getSingleInterview(id, token)(dispatch);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // Add feedback in interview
    const handleFeedback = async (
        interviewId: number,
        userId: number,
        token: string,
        notes: string
    ) => {
        try {
            const res = await postAdminFeedback(interviewId, userId, token, notes);
            getSingleInterview(id, token)(dispatch);
            onClose()
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div>
            <Navbar />
            <DetailPageNav interview={interview} id={id} />
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
                        {interview && (
                            <Table w={"100%"} variant={"striped"} colorScheme="teal" >
                                <Tbody>
                                    <Tr>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            title
                                        </Td>
                                        <Td textAlign={"left"} color={"black"} fontSize={"17px"} fontWeight={"500"}>
                                            {Object.keys(interview).length === 0
                                                ? ""
                                                : interview.title}
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            Start Time
                                        </Td>
                                        <Td textAlign={"left"} color={"black"} fontSize={"17px"} fontWeight={"500"}>
                                            {Object.keys(interview).length === 0
                                                ? ""
                                                : convertTimeFormat(interview.startTime)}
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            End Time
                                        </Td>
                                        <Td textAlign={"left"} color={"black"} fontSize={"17px"} fontWeight={"500"}>
                                            {Object.keys(interview).length === 0
                                                ? ""
                                                : convertTimeFormat(interview.endTime)}
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            isStarted
                                        </Td>
                                        <Td textAlign={"left"} color={"black"} fontSize={"17px"} fontWeight={"500"}>
                                            {" "}
                                            {interview.meetingStatus == "C" ? (
                                                <Text
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    Canceled...
                                                </Text>
                                            ) : miliStart <= time &&
                                                interview.meetingStatus == "P" ? (
                                                <Button
                                                    onClick={() =>
                                                        handleStarted(
                                                            interview.interviewId,
                                                            userId,
                                                            token
                                                        )
                                                    }
                                                    colorScheme="blue"
                                                >
                                                    Start
                                                </Button>
                                            ) : miliStart <= time &&
                                                interview.meetingStatus == "SS" ? (
                                                <Button
                                                    onClick={() =>
                                                        handleStarted(
                                                            interview.interviewId,
                                                            userId,
                                                            token
                                                        )
                                                    }
                                                    colorScheme="blue"
                                                >
                                                    Start
                                                </Button>
                                            ) : interview.meetingStatus == "P" ? (
                                                <Text
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    you can start the meet at start time
                                                </Text>
                                            ) : interview.meetingStatus == "S" ? (
                                                <Button disabled={true} colorScheme="blue">
                                                    Started
                                                </Button>
                                            ) : interview.meetingStatus == "IS" ? <Button disabled={true} colorScheme="blue">
                                                Started
                                            </Button> : (
                                                <Text
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    The meeting has already ended
                                                </Text>
                                            )}
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            isEnded
                                        </Td>
                                        <Td textAlign={"left"} color={"black"} fontSize={"17px"} fontWeight={"500"}>
                                            {interview.meetingStatus == "C" ? (
                                                <Text
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    Canceled
                                                </Text>
                                            ) : interview.adminFeedback == null ? (
                                                <Text
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    Must add feedback to end the meet
                                                </Text>
                                            ) : interview.meetingStatus == "IE" ? (
                                                <Button disabled={true} colorScheme="blue">
                                                    Ended
                                                </Button>
                                            ) : interview.meetingStatus == "E" ? (
                                                <Button disabled={true} colorScheme="blue">
                                                    Ended
                                                </Button>
                                            ) : (miliEnd <= time &&
                                                interview.meetingStatus == "S") ? (
                                                <Button
                                                    onClick={() =>
                                                        handleEnded(
                                                            interview.interviewId,
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
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    you can not end the meet before endtime
                                                </Text>
                                            )}
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            Interviewer Name
                                        </Td>
                                        <Td textAlign={"left"} color={"black"} fontSize={"17px"} fontWeight={"500"}>
                                            {Object.keys(interview).length === 0
                                                ? ""
                                                : interview.interviewerName}
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            Interviewee Name
                                        </Td>
                                        <Td textAlign={"left"} color={"black"} fontSize={"17px"} fontWeight={"500"}>
                                            {Object.keys(interview).length === 0
                                                ? ""
                                                : interview.intervieweeName}
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            Meeting Status
                                        </Td>
                                        <Td textAlign={"left"}>
                                            {Object.keys(interview).length === 0 ? (
                                                ""
                                            ) : interview.meetingStatus == "P" ? (
                                                <Text
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    Pending
                                                </Text>
                                            ) : interview.meetingStatus === "C" ? (
                                                <Text
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    Canceled...
                                                </Text>
                                            ) : interview.meetingStatus === "SS" ? (
                                                <Text
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    Started By Student
                                                </Text>
                                            ) : interview.meetingStatus === "SE" ? (
                                                <Text
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    Ended By Student
                                                </Text>
                                            ) : interview.meetingStatus == "IE" ? (
                                                <Text
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    Ended By Interviewer
                                                </Text>
                                            ) : interview.meetingStatus == "IS" ? (
                                                <Text
                                                    color={"black"}
                                                    fontSize={"17px"}
                                                    fontWeight={"500"}
                                                >
                                                    Started By Interviewer
                                                </Text>
                                            ) : interview.meetingStatus == "S" ? (
                                                <Text color={"black"} fontSize={"17px"} fontWeight={"500"}>Started</Text>
                                            ) : interview.meetingStatus == "E" ? (
                                                <Text
                                                    color={"black"}
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
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            Feedback
                                        </Td>
                                        <Td textAlign={"left"}>
                                            <Text
                                                color={"black"}
                                                fontSize={"17px"}
                                                fontWeight={"500"}>
                                                {decodeURIComponent(interview.adminFeedback)}
                                            </Text>

                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            Date
                                        </Td>
                                        <Td textAlign={"left"} color={"black"} fontSize={"17px"} fontWeight={"500"}>
                                            {Object.keys(interview).length === 0
                                                ? ""
                                                : interview.date}
                                        </Td>
                                    </Tr>
                                    <Tr >
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            Join Meeting
                                        </Td>
                                        <Td textAlign={"left"}>
                                            <Link

                                                to={`${Object.keys(interview).length !== 0 &&
                                                    interview.meetingLink
                                                    }`}
                                                target="_blank"
                                            >
                                                <Button
                                                    colorScheme="blue"
                                                >
                                                    join meet
                                                </Button>
                                            </Link>
                                        </Td>
                                    </Tr>
                                    {interview.meetingStatus == "S" ? <Tr >
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                        </Td>
                                        <Td textAlign={"left"} fontSize={"17px"} fontWeight={"500"}>
                                            Add Feedback
                                        </Td>
                                        <Td textAlign={"left"} color={"black"} fontSize={"17px"} fontWeight={"500"}>
                                            <Box
                                                display={"flex"}
                                                w={"200px"}
                                                textAlign={"left"}
                                            >
                                                <Button
                                                    onClick={onOpen}
                                                    colorScheme="blue"
                                                >
                                                    Add Feedback
                                                </Button>

                                                <Modal isOpen={isOpen} onClose={onClose}>
                                                    <ModalOverlay />
                                                    <ModalContent>
                                                        <ModalHeader>Add Feedback</ModalHeader>
                                                        <ModalCloseButton />
                                                        <ModalBody>
                                                            <Textarea
                                                                onChange={(e) => {
                                                                    setFeedback(e.target.value);
                                                                }}
                                                            ></Textarea>
                                                        </ModalBody>

                                                        <ModalFooter >
                                                            <Button
                                                                colorScheme="blue"
                                                                mr={3}
                                                                onClick={() =>
                                                                    handleFeedback(
                                                                        interview.interviewId,
                                                                        userId,
                                                                        token,
                                                                        feedback
                                                                    )
                                                                }
                                                            >
                                                                Add Feedback
                                                            </Button>
                                                        </ModalFooter>
                                                    </ModalContent>
                                                </Modal>
                                            </Box>
                                        </Td>
                                    </Tr> : ""}
                                </Tbody>
                            </Table>
                        )}

                    </Box>
                </Box>
            </main>
        </div>
    );
};

export default AdminInterviewDetailPage;
