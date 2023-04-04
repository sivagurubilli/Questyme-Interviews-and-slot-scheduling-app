import Navbar from '../../../../Components/Navbar/Navbar'
import React from 'react'
import InterviewCreateNav from './InterviewCreateNav'
import { Box, Button, FormErrorMessage, FormLabel, Grid, Input, Select, Textarea, useMediaQuery } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as yup from "yup";
import './index.css'
import { useDispatch } from 'react-redux'
import { createSingleInterview } from '../../../../Redux/ScheduleInterviewAdmin/ActionCreators'

const validationSchema = yup.object().shape({
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

export interface MyFormValues {
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
    const dispatch = useDispatch();

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

    const onSubmit = (values: MyFormValues) => {
        const startTime = values.start + ":00";
        const endTime = values.end + ":00";
        const data = {
            "interviewerEmail": values.interviewer,
            "intervieweeEmail": values.interviewer,
            "startTime": startTime,
            "endTime": endTime,
            "date": values.date,
            "category": values.category,
            "instructions": values.instruction,
            "title": values.title,
            "meetingLink": values.zoomlink,
            "batch": values.batch
        }
        console.log(data);
        createSingleInterview(data)(dispatch)
    };

    let month = setDateTime(dateArray[0]);
    let date = setDateTime(dateArray[1]);
    let year = setDateTime(dateArray[2]);

    const { handleSubmit, handleBlur, touched, handleChange, values, errors } = useFormik({
        onSubmit,
        initialValues,
        validationSchema,
    })

    return (
        <div className="container">
            <Navbar />
            <InterviewCreateNav />
            <Box w="80%" ml="10%" mt="60px" minH="200px" h="auto" p="5%" bg="white" borderRadius="10px" boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)">
                <Box borderRadius={"10px"} justifyContent={'center'} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" width={"100%"} p="20px">
                    <form onSubmit={handleSubmit}>
                        <div className='formMainDiv'>
                            <div className='title'>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Title
                                </FormLabel>
                                <Input
                                    name="title"
                                    placeholder="Enter Title"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.title && <p style={{ "color": "red" }}>{errors.title}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">Interviewer Email</FormLabel>
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type='email'
                                    name="interviewer"
                                    placeholder="Enter Interviewer e-mail address"
                                    value={values.interviewer}
                                />
                                {errors.interviewer && <p style={{ "color": "red" }}>{errors.interviewer}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Interviewee Email
                                </FormLabel>
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type='email'
                                    name="interviewee"
                                    placeholder="Enter Interviewer e-mail address"
                                    value={values.interviewee}
                                />
                                {errors.interviewee && <p style={{ "color": "red" }}>{errors.interviewee}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Start Time
                                </FormLabel>
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="start"
                                    type='time'
                                    value={values.start}
                                />
                                {errors.start && <p style={{ "color": "red" }}>{errors.start}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    End Time
                                </FormLabel>
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="end"
                                    type='time'
                                    value={values.end}
                                />
                                {errors.end && <p style={{ "color": "red" }}>{errors.end}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Date
                                </FormLabel>
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="date"
                                    type='date'
                                    min={`${year}-${month}-${date}`}
                                    value={values.date}
                                />
                                {errors.date && <p style={{ "color": "red" }}>{errors.date}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Category
                                </FormLabel>
                                <Select
                                    name='category'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.category}
                                >
                                    <option value={"category"}>Technical Round</option>
                                    <option value={"category"}>DSA Round</option>
                                    <option value={"category"}>Manegerial round</option>
                                    <option value={"category"}>HR Round</option>
                                </Select>
                                {errors.category && <p style={{ "color": "red" }}>{errors.category}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Batch
                                </FormLabel>
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='batch'
                                    type='text'
                                    value={values.batch}
                                />
                                {errors.batch && <p style={{ "color": "red" }}>{errors.batch}</p>}
                            </div>
                            <div>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Zoom Link
                                </FormLabel>
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="zoomlink"
                                    placeholder="Enter Zoomlink "
                                    value={values.zoomlink}
                                />
                                {errors.zoomlink && <p style={{ "color": "red" }}>{errors.zoomlink}</p>}
                            </div>
                            <div className='instruction'>
                                <FormLabel mt="10px" color="rgb(75 85 99)">
                                    Instructions
                                </FormLabel>
                                <Textarea
                                    name="instruction"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.instruction}
                                />
                                {errors.instruction && <p style={{ "color": "red" }}>{errors.instruction}</p>}
                            </div>
                        </div>
                        <div className='submitButton'>
                            <Button type='submit' colorScheme='blue' mt="10px">Schedule Interview</Button>
                        </div>
                    </form>
                </Box>
            </Box>
        </div >
    )
}
