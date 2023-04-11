import Navbar from "../../../Components/Navbar/Navbar";
import React, { useState } from "react";
import DetailPageNav from "./InterviewDetailPageNav";
import { Box, Button, Flex, Switch, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AdminInterviewDetailPage = () => {
    const [currentInterview, setCurrentInterview] = useState({
        "interviewId": 30,
        "interviewerName": "bobsmith",
        "intervieweeName": "johndoe",
        "startTime": "04:59:00",
        "endTime": "05:00:00",
        "date": "05-04-2023",
        "category": "Technical",
        "instructions": "This interview will cover topics related to software engineering",
        "title": "Software Engineer Interview",
        "meetingLink": "https://zoom.us/j/1234567890",
        "batch": "Batch 5",
        "meetingStatus": "P",
        "studentNote": null,
        "adminFeedback": null
    })

    return (
        <div>
            <Navbar />
            <DetailPageNav />
            <main>
                <Box bgColor={"#fafafa"} p={"20px"}>
                    <Box w={"75%"} m={"auto"} bg={"white"} mt={"20px"} p={"50px"} borderRadius={"10px"} bgColor={"white"} border={"1px solid black"}>
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
                                        color={"red"}
                                    >
                                        {Object.keys(currentInterview).length === 0 ? "" : currentInterview.title}
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
                                        color={"red"}
                                    >
                                        {Object.keys(currentInterview).length === 0 ? "" : currentInterview.startTime}
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
                                        color={"red"}
                                    >
                                        {Object.keys(currentInterview).length === 0 ? "" : currentInterview.endTime}
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
                                        color={"red"}
                                    >
                                        {Object.keys(currentInterview).length === 0 ? "" : currentInterview.category}
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
                                        color={"red"}
                                    >
                                        {Object.keys(currentInterview).length === 0 ? "" : currentInterview.intervieweeName}
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
                                        color={"red"}
                                    >
                                        {Object.keys(currentInterview).length === 0 ? "" : currentInterview.interviewerName}
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
                                        color={"red"}
                                    >
                                        {Object.keys(currentInterview).length === 0 ? "" : currentInterview.batch}
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
                                    <Link to={`${Object.keys(currentInterview).length === 0 ? "" : currentInterview.meetingLink}`}><Button colorScheme="blue" >Join Meet</Button></Link>
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
                    </Box>
                </Box>
            </main>
        </div>
    );
};

export default AdminInterviewDetailPage;
