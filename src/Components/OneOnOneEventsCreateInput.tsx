import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

//yup validation schema 
const validationSchema = yup.object().shape({
  eventName: yup
    .string()
    .required("This feild is required")
    .min(3, "Name must be 3 character"),
  location: yup.string().required("This feild is required"),
  duration: yup.string().required("This feild is required"),
});

const OneOnOneEventsCreateInput = ({
  EventValues,
  setEventValues,
  SubmitVal,
  setNameEdit,
}: any) => {

  //setting initial values for formik and yup
  const initialValues = {
    eventName: EventValues.eventName,
    location: EventValues.location,
    duration: EventValues.duration,
    eventLink: EventValues.eventLink,
  };
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  const navigate = useNavigate();

  const userName = "gurubillisiva22@gmail.com";
  const onSubmit = async () => {
    if (SubmitVal.trim() === "Next") {
      setEventValues({
        ...values,
        eventLink: `http://localhost:3000/${userName}/${
          values.eventName
        }/${Math.floor(Math.random() * 1000)}`,
      });
      setTimeout(() => {
        navigate(`/admin/one-on-one-interviews/edit/${1}`);
      }, 3000);
    } else {
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
    if (SubmitVal === "Save") {
      setNameEdit(false);
    } else {
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box>
          <FormLabel mt="10px" color="rgb(75 85 99)">
            Event name{" "}
          </FormLabel>

          <Input
            width={isSmallerThan600 ? "80%" : "40%"}
            name="eventName"
            value={values.eventName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Event Name"
          />

          {touched.eventName && errors.eventName && (
            <Text color="red">
              {JSON.stringify(errors.eventName).replace(/"/g, "")}
            </Text>
          )}
        </Box>

        <FormLabel mt="10px" color="rgb(75 85 99)">
          Location
        </FormLabel>
        <Select
          width={isSmallerThan600 ? "80%" : "40%"}
          value={values.location}
          onChange={handleChange}
          name="location"
          color="rgb(75 85 99)"
          placeholder="Select Location"
        >
          <option>Zoom</option>
          <option>Google Meet</option>
        </Select>
        {touched.location && errors.location && (
          <Text color="red">
            {JSON.stringify(errors.location).replace(/"/g, "")}
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
          <option>15 mins</option>
          <option>30 mins</option>
          <option>45 mins</option>
          <option>60 mins</option>
          <option>90 mins</option>
          <option>120 mins</option>
        </Select>
        {touched.duration && errors.duration && (
          <Text color="red">
            {JSON.stringify(errors.duration).replace(/"/g, "")}
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
          value={values.eventName}
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
              {SubmitVal}
            </Button>
          </Box>
        </Flex>
      </form>
    </div>
  );
};

export default OneOnOneEventsCreateInput;
