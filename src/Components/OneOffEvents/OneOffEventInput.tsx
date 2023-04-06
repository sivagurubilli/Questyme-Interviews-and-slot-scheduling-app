import {
    Box,
    Button,
    Flex,
    FormLabel,
    Grid,
    Input,
    Select,
    Text,
    Textarea,
    useMediaQuery,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useFormik } from "formik";
import { Duration } from "../../Assets/Assets";
import { validationSchema } from "../OneOnOneEdit/ValidationSchema";
import TimeslotsInput from "../OneOnOneEdit/TimeslotsInput";
  //yup validation schema

  
  const OneOffEventInput = ({
    EventValues,
    setEventValues,
    addEvent,
    SaveEvent,
    buttonName,
  }: any) => {
    //setting initial values for formik and yup
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  
    const initialValues = {
      title: EventValues.title,
      instruction: EventValues.instruction,
      meetingLink: EventValues.meetingLink,
      duration: EventValues.duration,
      date: EventValues.date,
      adminId: EventValues.adminId
    };
  
    const onSubmit = async () => {
      if (buttonName === "Create Slots") {
        addEvent();
      } else {
        SaveEvent();
      }
    };

  
  
    //using formik we can set values onSubmit and onChange
    const { handleSubmit, handleBlur, touched, handleChange, values, errors } =
      useFormik({
        onSubmit,
        initialValues,
        validationSchema,
      });
      
  
    const setCancel = () => {
      setEventValues("");
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
            <Box>
              <FormLabel mt="10px" color="rgb(75 85 99)">
                Event name{" "}
              </FormLabel>
  
              <Input
                width="100%"
                minW="40%"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Event Name"
              />
  
              {touched.title && errors.title && (
                <Text color="red">
                  {JSON.stringify(errors.title).replace(/"/g, "")}
                </Text>
              )}
            </Box>
  
            <Box>
              <FormLabel mt="10px" color="rgb(75 85 99)">
                MeetingLink{" "}
              </FormLabel>
  
              <Input
                width="100%"
                minW="40%"
                name="meetingLink"
                value={values.meetingLink}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="meetingLink"
              />
  
              {touched.meetingLink && errors.meetingLink && (
                <Text color="red">
                  {JSON.stringify(errors.meetingLink).replace(/"/g, "")}
                </Text>
              )}
            </Box>
            <Box>
              <FormLabel mt="10px" color="rgb(75 85 99)">
                Duration
              </FormLabel>
              <Select
                 width="100%"
                 minW="40%"
                value={values.duration}
                onChange={handleChange}
                name="duration"
                placeholder="Duration"
              >
               {Duration.map((e)=>(
              <option key={e} value={e}>
                {e} 
              </option>))}
              
              </Select>
              {touched.duration && errors.duration && (
                <Text color="red">
                  {JSON.stringify(errors.duration).replace(/"/g, "")}
                </Text>
              )}
            </Box>
            
            <Box>
              <FormLabel mt="10px" color="rgb(75 85 99)">
                Select Date{" "}
              </FormLabel>
  
              <Input
                 width="100%"
                 minW="40%"
                name="date"
                type="date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="date"
              />
            </Box>
            <Box>
              <FormLabel mt="10px" color="rgb(75 85 99)">
                Instructions
              </FormLabel>
              <Textarea
                 width="100%"
                 minW="40%"
                name="instruction"
                value={values.instruction}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Instructions"
              />
              {touched.instruction && errors.instruction && (
                <Text color="red">
                  {JSON.stringify(errors.instruction).replace(/"/g, "")}
                </Text>
              )}
            </Box>
          
            <Box  minW="40%"  width="100%">
            <FormLabel mt="10px" color="rgb(75 85 99)">
              Add Availability  {" "}
              </FormLabel>

             
              <TimeslotsInput
                values={values}
                EventValues={EventValues}
                setEventValues={setEventValues}
              />
            
              
            </Box>
          </Grid>
          <Flex mt="20px" justifyContent="flex-end">
            <Box>
              <Button variant="link" onClick={setCancel}>
                Cancel
              </Button>
              <Button
                borderRadius="16px"
                colorScheme="blue"
                ml="20px"
                type="submit"
              >
                {buttonName}
              </Button>
            </Box>
          </Flex>
        </form>
      </div>
    );
  };
  
  export default OneOffEventInput;
  