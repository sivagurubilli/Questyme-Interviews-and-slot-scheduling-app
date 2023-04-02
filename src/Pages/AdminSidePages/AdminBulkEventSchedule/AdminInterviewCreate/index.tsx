import Navbar from '../../../../Components/Navbar/Navbar'
import React from 'react'
import InterviewCreateNav from './InterviewCreateNav'
import { Box, Button, FormErrorMessage, FormLabel, Grid, Input, Select, Textarea, useMediaQuery } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as yup from "yup";
import './index.css'

const formSchema = yup.object().shape({
    interviewer: yup
        .string()
        .required("Interviewer e-mail address is required")
        .email("Enter a valid e-mail address"),
    interviewee: yup
        .string()
        .required("Interviewee e-mail address is required")
        .email("Enter a valid e-mail address"),
    start: yup
        .string()
        .required("Start date time is required"),
    end: yup
        .string()
        .required("End date time is required"),
    date: yup
        .string()
        .required("Date is required"),
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
    "date": string,
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
    "date": "",
    "category": "",
    "instruction": "",
    "title": "",
    "zoomlink": "",
    "batch": ""
}

export const CreateSingleInterview = () => {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

    // -------------takinc current date and time for validation --------------
    let currDateTime = new Date();
    let dateString = currDateTime.toLocaleDateString();
    let dateArray = dateString.split('/').map(Number);

    const setDateTime = (value: any) => {
        if (value < 10) {
            return `0${value}`
        } else {
            return value;
        }
    }

    let month = setDateTime(dateArray[0]);
    let date = setDateTime(dateArray[1]);
    let year = setDateTime(dateArray[2]);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log("form values", values);
        }
    })

    return (
        <div className="container">
            <Navbar />
            <InterviewCreateNav />
            <Box w="80%" ml="10%" mt="60px" minH="200px" h="auto" p="5%" bg="white" borderRadius="10px" boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)">
                <Box borderRadius={"10px"} justifyContent={'center'} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" width={"100%"} p="20px">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='formMainDiv'>
                            <div className='title'>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Title
                                </FormLabel>
                                <Input
                                    name="title"
                                    placeholder="Enter Title "
                                />
                                {formik.errors.title && <p style={{ "color": "red" }}>{formik.errors.title}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">Interviewer Email</FormLabel>
                                <Input
                                    type='email'
                                    name="interviewer"
                                    placeholder="Enter Interviewer e-mail address"
                                />
                                {formik.errors.interviewer && <p style={{ "color": "red" }}>{formik.errors.interviewer}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Interviewee Email
                                </FormLabel>
                                <Input
                                    type='email'
                                    name="interviewee"
                                    placeholder="Enter Interviewer e-mail address"
                                />
                                {formik.errors.interviewee && <p style={{ "color": "red" }}>{formik.errors.interviewee}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Start Time
                                </FormLabel>
                                <Input
                                    name="start"
                                    type='time'
                                />
                                {formik.errors.start && <p style={{ "color": "red" }}>{formik.errors.start}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    End Time
                                </FormLabel>
                                <Input
                                    name="end"
                                    type='time'
                                />
                                {formik.errors.end && <p style={{ "color": "red" }}>{formik.errors.end}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Date
                                </FormLabel>
                                <Input
                                    name="date"
                                    type='date'
                                    min={`${year}-${month}-${date}`}
                                />
                                {formik.errors.date && <p style={{ "color": "red" }}>{formik.errors.date}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Category
                                </FormLabel>
                                <Select
                                    name='category'
                                >
                                    <option value={"category"}>Technical Round</option>
                                    <option value={"category"}>DSA Round</option>
                                    <option value={"category"}>Manegerial round</option>
                                    <option value={"category"}>HR Round</option>
                                </Select>
                                {formik.errors.category && <p style={{ "color": "red" }}>{formik.errors.category}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Batch
                                </FormLabel>
                                <Input
                                    name='batch'
                                    type='text'
                                />
                                {formik.errors.batch && <p style={{ "color": "red" }}>{formik.errors.batch}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Zoom Link
                                </FormLabel>
                                <Input
                                    name="zoomlink"
                                    placeholder="Enter Zoomlink "
                                />
                                {formik.errors.zoomlink && <p style={{ "color": "red" }}>{formik.errors.zoomlink}</p>}
                            </div>
                            <div className='instruction'>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Instructions
                                </FormLabel>
                                <Textarea
                                    name="instruction"
                                />
                                {formik.errors.instruction && <p style={{ "color": "red" }}>{formik.errors.instruction}</p>}
                            </div>
                        </div>
                        <div className='submitButton'>
                            <Button type='submit' colorScheme='blue' mt="10px">Schedule Interview</Button>
                        </div>
                    </form>
                </Box>
            </Box>
        </div>
    )
}
