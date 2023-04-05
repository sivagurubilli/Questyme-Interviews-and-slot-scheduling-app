import Navbar from "../../../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import DashboardNavbar from "../AdminDashBoard/DashboardNavbar";
import { Box, Button, Divider, Flex, FormLabel, Input, Select, Stack, Text, useMediaQuery, useToast } from "@chakra-ui/react";
import BulkStudentsUpload from "./BulkStudentsUpload";
import { useFormik } from "formik";
import * as yup from "yup";
import { Batch } from "../../../Assets/Assets";
import { IAddStdents } from "../../../Services/AdminSideServices/GetEventsInterface";
import { AddStudentService } from "../../../Services/AdminSideServices/GetEventsService";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

const validationSchema = yup.object().shape({
 name: yup
    .string()
    .required("This feild is required")
    .min(3, "Name must be 3 character"),
  email: yup.string().required("This feild is required"),
 password: yup.string().required("This feild is required"),
  batch: yup.string().required("This feild is required")
});



const AddStudents = () => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const toast  = useToast()
  const state = useSelector((state:RootState)=>state.AuthReducer)
 const token = state.token
const [studentDetails,setStudentDetails] =useState<IAddStdents>({
  name:"",
  password:"",
  email:"",
  batch:""
})
  

    //setting initial values for formik and yup
    const initialValues = {
      name: studentDetails.name,
      email: studentDetails.email,
      batch: studentDetails.batch,
      password: studentDetails.password,
    };
  
    const onSubmit = async () => {
     try{
      const  response = await AddStudentService(studentDetails,token)
      if(response){
        toast({
          title: "Student details added successfully",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
       }
     }catch(error){
      toast({
        title: "Something Went Wrong",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
     }
    };
  
    //using formik we can set values onSubmit and onChange
    const { handleSubmit, handleBlur, touched, handleChange, values, errors } =
      useFormik({
        onSubmit,
        initialValues,
        validationSchema,
      });
  
  
  
    useEffect(() => {
      setStudentDetails({ ...values });
    }, [values,setStudentDetails ]);

  return (
    <div className="container">
      <Navbar />
      <DashboardNavbar />
      <Box
        w="80%"
        ml="10%"
        mt="60px"
        minH="200px"
        h="auto"
        p="5%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <Stack direction={isSmallerThan600 ? "column" : "row"} spacing={8}>

          <Box w="50%" p="20px" borderRight={isSmallerThan600 ? "" : "1px solid"} >
            <FormLabel>Add Student</FormLabel>
            <Divider />

            <form onSubmit={handleSubmit}>
            <Box>
              <FormLabel mt="10px" color="rgb(75 85 99)">
                Student Name{" "}
              </FormLabel>

              <Input
                width={isSmallerThan600 ? "80%" : "100%"}
                name="name"
                placeholder="Student Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>

          
            <Box>
              <FormLabel mt="10px" color="rgb(75 85 99)">
                Email{" "}
              </FormLabel>

              <Input
                width={isSmallerThan600 ? "80%" : "100%"}
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>

            <Box>
              <FormLabel mt="10px" color="rgb(75 85 99)">
               Pass Word{" "}
              </FormLabel>

              <Input
                width={isSmallerThan600 ? "80%" : "100%"}
                name="meetingLink"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>
            <Box>
            <FormLabel mt="10px" color="rgb(75 85 99)">
             Batch
            </FormLabel>
            <Select
              value={values.batch}
              onChange={handleChange}
              name="batch"
              placeholder="Batch"
            >
              {Batch.map((e)=>(
              <option key={e} value={e}>
                {e} 
              </option>))}
              
            </Select>
            {touched.batch && errors.batch && (
              <Text color="red">
                {JSON.stringify(errors.batch).replace(/"/g, "")}
              </Text>
            )}
          </Box>
               
            <Flex mt="20px" justifyContent="flex-end">
              <Button colorScheme="blue" _hover={{ cursor: "pointer" }}>
                Add Student
              </Button>
            </Flex>
            </form>
          </Box>
            <BulkStudentsUpload/>
        </Stack>
      </Box>
    </div>
  );
};

export default AddStudents;
