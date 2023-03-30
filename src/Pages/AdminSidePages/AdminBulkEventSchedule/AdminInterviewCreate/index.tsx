import Navbar from '../../../../Components/Navbar/Navbar'
import React from 'react'
import InterviewCreateNav from './InterviewCreateNav'
import { Box, Button, FormErrorMessage, FormLabel, Input, Select, Textarea, useMediaQuery } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import * as yup from "yup";

const formSchema = yup.object().shape({
    interviewer: yup
        .string()
        .required("Interviewer ID is required"),
    interviewee: yup
        .string()
        .required("Interviewee ID is required"),
    start: yup
        .string()
        .required("Start date time is required"),
    end: yup
        .string()
        .required("End date time is required"),
    category: yup
        .string()
        .required("Category is required"),
    instruction: yup
        .string()
        .required("Instructions are required"),
    title: yup
        .string()
        .required("Title is required"),
    zoomlink: yup
        .string().required("zoom Link is required")
        .matches(/^https:\/\/[a-z0-9-]+\.zoom\.us\/j\/\d{10,}$/, "Please enter a valid zoom link"),
    batch: yup
        .string()
        .required("Batch is required")
})

interface MyFormValues {
    "interviewer": string,
    "interviewee": string,
    "start": string,
    "end": string,
    "category": string,
    "instruction": string,
    "title": string,
    "zoomlink": string,
    "batch": string
}
    const initialValues: MyFormValues = {
        "interviewer": "",
        "interviewee": "",
        "start": "",
        "end": "",
        "category": "",
        "instruction": "",
        "title": "",
        "zoomlink": "",
        "batch": ""
    }

export const CreateSingleInterview = () => {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");


    const handleSubmit = (values: MyFormValues) => {
        console.log(values);
    }

    return (
        <div className="container">
            <Navbar />
            <InterviewCreateNav />
            <Box w="80%" ml="10%" mt="60px" minH="200px" h="auto" p="5%" bg="white" borderRadius="10px" boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)">
                <Box borderRadius={"10px"} justifyContent={'center'} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" width={"100%"} p="20px">
                    <Formik
                        initialValues={initialValues}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validationSchema={formSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({ errors }) => (
                            <Form>
                                <div>
                                    <FormLabel mt="10px" color="rgb(75 85 99)">Interviewer ID</FormLabel>
                                    <Input
                                        type='text'
                                        width={isSmallerThan600 ? "80%" : "40%"}
                                        name="interviewer"
                                        placeholder="Enter Interviewer ID"
                                    />
                                    {errors.interviewer && <p>{errors.interviewer}</p>}
                                </div>
                                <div>
                                    <FormLabel mt="10px" color="rgb(75 85 99)">
                                        Interviewee ID
                                    </FormLabel>
                                    <Input
                                        width={isSmallerThan600 ? "80%" : "40%"}
                                        name="interviewee"
                                        placeholder="Enter Interviewer ID"
                                    />
                                    {errors.interviewee && <FormErrorMessage>{errors.interviewee}</FormErrorMessage>}
                                </div>
                                <div>
                                    <FormLabel mt="10px" color="rgb(75 85 99)">
                                        Start Time
                                    </FormLabel>
                                    <Input
                                        width={isSmallerThan600 ? "80%" : "40%"}
                                        name="start"
                                        type='dateTime-local'
                                    />
                                    {errors.start && <FormErrorMessage>{errors.start}</FormErrorMessage>}
                                </div>
                                <div>
                                    <FormLabel mt="10px" color="rgb(75 85 99)">
                                        End Time
                                    </FormLabel>
                                    <Input
                                        width={isSmallerThan600 ? "80%" : "40%"}
                                        name="end"
                                        type='dateTime-local'
                                    />
                                    {errors.end && <FormErrorMessage>{errors.end}</FormErrorMessage>}
                                </div>
                                <div>
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
                                    {errors.category && <FormErrorMessage>{errors.category}</FormErrorMessage>}
                                </div>
                                <div>
                                    <FormLabel mt="10px" color="rgb(75 85 99)">
                                        Instructions
                                    </FormLabel>
                                    <Textarea
                                        width={isSmallerThan600 ? "80%" : "40%"}
                                        name="instruction"
                                    />
                                    {errors.instruction && <FormErrorMessage>{errors.instruction}</FormErrorMessage>}
                                </div>
                                <div>
                                    <FormLabel mt="10px" color="rgb(75 85 99)">
                                        Title
                                    </FormLabel>
                                    <Input
                                        width={isSmallerThan600 ? "80%" : "40%"}
                                        name="title"
                                        placeholder="Enter Title "
                                    />
                                    {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
                                </div>
                                <div>
                                    <FormLabel mt="10px" color="rgb(75 85 99)">
                                        Zoom Link
                                    </FormLabel>
                                    <Input
                                        width={isSmallerThan600 ? "80%" : "40%"}
                                        name="zoomlink"
                                        placeholder="Enter Zoomlink "
                                    />
                                    {errors.zoomlink && <FormErrorMessage>{errors.zoomlink}</FormErrorMessage>}
                                </div>
                                <div>
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

                                </div>
                                <div>
                                    <Button type='submit' colorScheme='blue' mt="10px">Schedule Interview</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </div>
    )
}
