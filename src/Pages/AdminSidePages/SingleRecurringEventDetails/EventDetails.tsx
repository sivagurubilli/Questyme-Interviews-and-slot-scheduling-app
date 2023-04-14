import React, { useCallback, useEffect, useState } from "react";
import { Box, Flex, FormLabel, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import SlotsSchedule from "../../../Components/AddAvailabilityToOneOnOne/SlotsSchedule";
import {
  DetailsRecurringEvent,
} from "../../../Services/AdminSideServices/GetEventsService";
import {  Link, useParams } from "react-router-dom";
import {
  DaysForRecurring,

  token,
  id as adminId,
} from "../../../Assets/Assets";

const OneOnOneSlots = () => {
  const [days, setDays] = useState(DaysForRecurring);

  const [recurringEventDetails, setRecurringEventDetails] = useState({
    title: "",
    meetingLink: "",
    duration: "",
    category: "",
    adminId: adminId,
    recurringId: 0,
    instruction: "",
    availabilities: [] as {
      day: string;
      isChecked: boolean;
      startTime: string;
      endTime: string;
    }[],
  });

  const { id } = useParams();

  // when getting values from backend make it to frontend
  useEffect(() => {
    const transformedResponse = recurringEventDetails?.availabilities?.map(
      (day) => {
        return {
          name: day.day,
          isChecked: true,
          inputs: [{ start: day.startTime, end: day.endTime }],

          errors: [{ start: "", end: "" }],
        };
      }
    );

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const result = days.map((day) => {
      const foundDay = transformedResponse?.find((item) => item.name === day);
      if (foundDay) {
        return foundDay;
      } else {
        return {
          name: day,
          isChecked: false,
          inputs: [{ start: "", end: "" }],
          errors: [{ start: "", end: "" }],
        };
      }
    });
    setDays(result);
  }, [recurringEventDetails]);

  const GetDetails = useCallback(async () => {
    try {
      const response = await DetailsRecurringEvent(adminId, token);

      response.forEach((el: any) => {
        if (id && el.recurringId === parseInt(id)) {
          setRecurringEventDetails(el);
        }
      });
    } catch (error) {}
    
  }, [id]);

  useEffect(() => {
    GetDetails();
  }, [GetDetails]);

  return (
    <div>
      <Box w="100%" h="auto" p="20px" mt="5px" border="1px solid grey">
      <Box
        w="100%"
    mb="30px"
        minH="200px"
        h="auto"
        p="2%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
            <Table variant="striped" colorScheme="teal">
         
          <Tbody>
            <Tr>
              <Td  fontWeight="medium">Tilte</Td>
              <Td  fontWeight="medium" isNumeric>{recurringEventDetails.title}</Td>
            </Tr>
            <Tr>
              <Td  fontWeight="medium">Category</Td>
              <Td  fontWeight="medium" isNumeric>{recurringEventDetails.category}</Td>
            </Tr>
            <Tr>
              <Td  fontWeight="medium">Duration</Td>
              <Td  fontWeight="medium" isNumeric>{recurringEventDetails.duration} Mins</Td>
            </Tr>
            <Tr>
              <Td  fontWeight="medium">Meeting Location</Td>
              <Td  fontWeight="medium" isNumeric><Link color="blue" to={recurringEventDetails.meetingLink}>{recurringEventDetails.meetingLink}</Link></Td>
            </Tr>
            </Tbody>
            </Table>

        </Box>

        <FormLabel ml="10px" color="rgb(75 85 99)">
          {" "}
           Availability Time for this Event Type{" "}
        </FormLabel>
        <Flex w="100%">
          <SlotsSchedule days={days} setDays={setDays} />
        </Flex>
      </Box>
    </div>
  );
};

export default OneOnOneSlots;
