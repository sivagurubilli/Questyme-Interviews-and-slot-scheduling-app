import {
  Box,
  Button,
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
import { RootState } from "../../Redux/store";
import { useSelector } from "react-redux";

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

const OneOnOneEventsEditInput = ({
  EventValues,
  setEventValues,
  setNameEdit,
  SaveEvent,
}: any) => {
  //setting initial values for formik and yup

  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const state = useSelector((state: RootState) => state);
  const AllData = state.SingleEventReducer;

  const initialValues = {
    title: AllData.AllData.title,
    instruction: AllData.AllData.instruction,
    meetingLink: AllData.AllData.meetingLink,
    duration: AllData.AllData.duration,
    category: AllData.AllData.category,
  };

  const userName = "gurubillisiva22@gmail.com";
  const onSubmit = async () => {
    SaveEvent();
  };

  //using formik we can set values onSubmit and onChange
  const { handleSubmit, handleBlur, touched, handleChange, values, errors } =
    useFormik({
      onSubmit,
      initialValues,
      validationSchema,
    });

  const setCancel = () => {
    setNameEdit(false);
  };

  //setting unique hashed link
  useEffect(() => {
    setEventValues({
      ...values,
      adminId: "5",
      eventLink: `http://localhost:3000/${userName}/${
        values.title
      }/${Math.floor(Math.random() * 1000)}`,
    });
  }, [setEventValues, values]);

  return (
    <div>
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
          <option key={"15mins"} value={"15 mins"}>
            15 mins
          </option>
          <option key={"30mins"} value={"30 mins"}>
            30 mins
          </option>
          <option key={"45mins"} value={"45 mins"}>
            45 mins
          </option>
          <option key={"60mins"} value={"60 mins"}>
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
        <FormLabel mt="20px" color="rgb(75 85 99)">
          Event link{" "}
        </FormLabel>

        <FormLabel mt="10px" color="rgb(75 85 99)">
          domainName/userName/{" "}
        </FormLabel>
        <Input
          width={isSmallerThan600 ? "80%" : "40%"}
          name="eventLink"
          placeholder="Event Link"
          value={values.title}
          onChange={handleChange}
        />

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
              Save
            </Button>
          </Box>
        </Flex>
      </form>
    </div>
  );
};

export default OneOnOneEventsEditInput;
