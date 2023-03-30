import Navbar from '../../../../Components/Navbar/Navbar'
import React from 'react'
import InterviewCreateNav from './InterviewCreateNav'
import { Box, Button, FormLabel, Input, Select, Textarea, useMediaQuery } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import * as yup from "yup";

const formSchema=yup.object().shape({
    interviewer:yup
    .string()
    .required("Interviewer ID is required"),
    interviewee:yup
    .string()
    .required("Interviewee ID is required"),
    start:yup
    .string()
    .required("Start date time is required"),
    end:yup
    .string()
    .required("End date time is required")
})

export const CreateSingleInterview = () => {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
    return (
        <div className="container">
            <Navbar />
            <InterviewCreateNav />
            <Box w="80%" ml="10%" mt="60px" minH="200px" h="auto" p="5%" bg="white" borderRadius="10px" boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)">
                <Box borderRadius={"10px"} justifyContent={'center'} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" width={"100%"} p="20px">
                    <Formik
                        initialValues={{
                            "interviewer": "",
                            "interviewee": "",
                            "start": "",
                            "end": "",
                            "category": "",
                            "instruction": "",
                            "title": "",
                            "zoomlink": "",
                            "batch": ""
                        }}
                        validateOnChange={false}
                        validateOnBlur={false}
                    // validationSchema={FormSchema}
                    onSubmit={(values)=>{console.log(values)}}
                    >
                        {({ errors }) => (
                            <Form>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Interviewer ID
                                </FormLabel>
                                <Input
                                    width={isSmallerThan600 ? "80%" : "40%"}
                                    name="interviewer"
                                    placeholder="Enter Interviewer ID"
                                />
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Interviewee ID
                                </FormLabel>
                                <Input
                                    width={isSmallerThan600 ? "80%" : "40%"}
                                    name="interviewee"
                                    placeholder="Enter Interviewer ID"
                                />
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Start Time
                                </FormLabel>
                                <Input
                                    width={isSmallerThan600 ? "80%" : "40%"}
                                    name="start"
                                    type='dateTime-local'
                                />
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    End Time
                                </FormLabel>
                                <Input
                                    width={isSmallerThan600 ? "80%" : "40%"}
                                    name="end"
                                    type='dateTime-local'
                                />
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Category
                                </FormLabel>
                                <Select
                                    width={isSmallerThan600 ? "80%" : "40%"}
                                    name='category'
                                >
                                    <option>Technical Round</option>
                                    <option>DSA Round</option>
                                    <option>Manegerial round</option>
                                    <option>HR Round</option>
                                </Select>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Instructions
                                </FormLabel>
                                <Textarea
                                    width={isSmallerThan600 ? "80%" : "40%"}
                                    name="instruction"
                                />
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Title
                                </FormLabel>
                                <Input
                                    width={isSmallerThan600 ? "80%" : "40%"}
                                    name="title"
                                    placeholder="Enter Title "
                                />
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Zoom Link
                                </FormLabel>
                                <Input
                                    width={isSmallerThan600 ? "80%" : "40%"}
                                    name="zoomlink"
                                    placeholder="Enter Zoomlink "
                                />
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Batch
                                </FormLabel>
                                <Select
                                    width={isSmallerThan600 ? "80%" : "40%"}
                                    name='batch'
                                >
                                    <option>CSBT</option>
                                    <option>DSA111</option>
                                    <option>Coading</option>
                                </Select>
                                <Button type='submit' colorScheme='blue' mt="10px">Schedule Interview</Button>
                            </Form>
                        )}

                    </Formik>
                </Box>
            </Box>
        </div>
    )
}
