import Navbar from "../../../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import DetailPageNav from "./InterviewDetailPageNav";
import { Box, Button, Flex, SkeletonCircle, SkeletonText, Switch, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleInterview } from "../../../Redux/InterviewByIdReducer/ActionCreators";
import { RootState } from "../../../Redux/store";

const AdminInterviewDetailPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams<string>();
    const token = useSelector((state: RootState) => state.AuthReducer.token)
    const interview = useSelector((state: RootState) => state.SingleInterviewReducer.interview)
    const isLoading = useSelector((state: RootState) => state.SingleInterviewReducer.isLoading)
    console.log(interview, isLoading, "interview")

    useEffect(() => {
        getSingleInterview(id, token)(dispatch);
    }, [])

    return (
        <div>
            <Navbar />
            <DetailPageNav interview={interview} id={id} />
            <main>
                <Box bgColor={"#fafafa"} p={"20px"}>
                    <Box w={"75%"} m={"auto"} bg={"white"} mt={"20px"} p={"50px"} borderRadius={"10px"} bgColor={"white"} border={"1px solid black"}>
                        {
                            isLoading ? (
                                <Box>
                                    <SkeletonCircle size="10" />
                                    <SkeletonText mt="4" noOfLines={8} spacing="4" skeletonHeight="2" />
                                </Box>
                            ) : (
                                <Flex
                                    flexDirection={"column"}
                                    gap={"5px"}
                                    justifyContent={"space-between"}
                                    alignItems={"left"}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
                                            >
                                                {Object.keys(interview).length === 0 ? "" : interview.title}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
                                            >
                                                {Object.keys(interview).length === 0 ? "" : interview.startTime}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
                                            >
                                                {Object.keys(interview).length === 0 ? "" : interview.endTime}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
                                            >
                                                {Object.keys(interview).length === 0 ? "" : interview.category}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
                                            >
                                                {Object.keys(interview).length === 0 ? "" : interview.intervieweeName}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
                                            >
                                                {Object.keys(interview).length === 0 ? "" : interview.interviewerName}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
                                            >
                                                {Object.keys(interview).length === 0 ? "" : interview.batch}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
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
                                            textAlign={"left"}
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
                                            textAlign={"left"}
                                        >
                                            <Link to={`${Object.keys(interview).length === 0 ? "" : interview.meetingLink}`}><Button colorScheme="blue" >Join Meet</Button></Link>
                                            <Text
                                                mt={"8px"}
                                                fontSize={"18px"}
                                                fontWeight={"500"}
                                                color={"blue"}
                                            >
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Flex>
                            )
                        }

                    </Box>
                </Box>
            </main>
        </div>
    );
};

export default AdminInterviewDetailPage;
