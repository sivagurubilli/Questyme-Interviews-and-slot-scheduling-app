import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

//yup validation schema
const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required("This feild is required")
    .min(3, "Name must be 3 character"),
  category: yup.string().required("This feild is required"),
  meetingLink: yup.string().required("This feild is required"),
  duration: yup.string().required("This feild is required"),
});

const OneOnOneEventsCreateInput = ({
  EventValues,
  setEventValues,
  addEvent,
}: any) => {
  //setting initial values for formik and yup
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  const initialValues = {
    title: EventValues.title,
    instruction: EventValues.instruction,
    meetingLink: EventValues.meetingLink,
    duration: EventValues.duration,
    category: EventValues.category,
    startTime: EventValues.startTime,
    endTime: EventValues.endTime,
  };

  const onSubmit = async () => {
    addEvent();
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

  useEffect(() => {
    setEventValues({ ...values });
  }, [values, setEventValues]);

  console.log(EventValues);
  return (
    <div>
      <Flex justifyContent="space-between">
        <FormLabel>Create Event With Following Values </FormLabel>
      </Flex>
      <Divider mt="10px" h="2px" />
      <form onSubmit={handleSubmit}>
        <Box>
          <FormLabel mt="10px" color="rgb(75 85 99)">
            Event name{" "}
          </FormLabel>

          <Input
            width={isSmallerThan600 ? "80%" : "40%"}
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

        <FormLabel mt="10px" color="rgb(75 85 99)">
          Instructions
        </FormLabel>
        <Textarea
          width={isSmallerThan600 ? "80%" : "40%"}
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

        <FormLabel mt="10px" color="rgb(75 85 99)">
          MeetingLink{" "}
        </FormLabel>

        <Input
          width={isSmallerThan600 ? "80%" : "40%"}
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
        <FormLabel mt="10px" color="rgb(75 85 99)">
          Duration
        </FormLabel>
        <Select
          width={isSmallerThan600 ? "80%" : "40%"}
          value={values.duration}
          onChange={handleChange}
          name="duration"
          placeholder="Duration"
        >
          <option key={"15mins"} value="15">
            15 mins
          </option>
          <option key={"30mins"} value="30">
            30 mins
          </option>
          <option key={"45mins"} value="45">
            45 mins
          </option>
          <option key={"60mins"} value="60">
            60 mins
          </option>
        </Select>
        {touched.duration && errors.duration && (
          <Text color="red">
            {JSON.stringify(errors.duration).replace(/"/g, "")}
          </Text>
        )}
        <FormLabel mt="10px" color="rgb(75 85 99)">
          Category
        </FormLabel>
        <Select
          width={isSmallerThan600 ? "80%" : "40%"}
          value={values.category}
          onChange={handleChange}
          name="category"
          placeholder="Category"
        >
          <option key={"Dsa"} value={"Dsa"}>
            Dsa
          </option>
          <option key={"coding"} value={"Coding"}>
            Coding
          </option>
          <option key={"Csbt"} value={"Csbt"}>
            C.S.B.T
          </option>
          <option key={"Revision"} value={"Revision"}>
            Revision
          </option>
        </Select>
        {touched.category && errors.category && (
          <Text color="red">
            {JSON.stringify(errors.category).replace(/"/g, "")}
          </Text>
        )}

        <Flex mt="20px">
          <Box>
            <FormLabel mt="10px" color="rgb(75 85 99)">
              StartTime
            </FormLabel>
            <Input
              mt="5px"
              w="60%"
              name="startTime"
              value={values.startTime}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormLabel mt="10px" color="rgb(75 85 99)">
              EndTime
            </FormLabel>
            <Input
              mt="5px"
              w="60%"
              name="endTime"
              value={values.endTime}
              onChange={handleChange}
            />
          </Box>
        </Flex>
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
              Next
            </Button>
          </Box>
        </Flex>
      </form>
    </div>
  );
};

export default OneOnOneEventsCreateInput;
