import Navbar from '../../../../Components/Navbar/Navbar'
import React from 'react'
import InterviewCreateNav from './InterviewCreateNav'
import { Box, FormLabel, Input, useMediaQuery } from '@chakra-ui/react'

export const CreateSingleInterview = () => {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
    return (
        <div className="container">
            <Navbar />
            <InterviewCreateNav />
            <Box w="80%" ml="10%" mt="60px" minH="200px" h="auto" p="5%" bg="white" borderRadius="10px" boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)">
                <Box borderRadius={"10px"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" width={"100%"} p="20px">
                    <FormLabel mt="10px" color="rgb(75 85 99)">
                        Interviewer ID
                    </FormLabel>
                    <Input
                        width={isSmallerThan600 ? "80%" : "40%"}
                        name="eventName"
                        placeholder="Enter Interviewer ID"
                    />
                </Box>
            </Box>
        </div>
    )
}
