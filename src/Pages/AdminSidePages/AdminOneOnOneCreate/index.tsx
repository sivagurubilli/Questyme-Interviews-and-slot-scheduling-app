import Navbar from "../../../Components/Navbar/Navbar";
import React, { useState } from "react";
import OneOnOneCreateNav from "./OneOnOneCreateNav";
import { Box, useToast } from "@chakra-ui/react";
import OneOnOneEventsCreateInput from "../../../Components/OneOnOneEventsCreateInput";
import { PostEventsService } from "../../../Services/AdminSideServices/GetEventsService";
import { useNavigate } from "react-router-dom";

interface IEventValues {
  title: string;
  instruction: string;
  meetingLink: string;
  adminId: string;
  duration: string;
  category: string;
  eventLink: string;
  startTime: string;
  endTime: string;
}

const OneonOneEventsCreate = () => {
  const [EventValues, setEventValues] = useState<IEventValues>({
    title: "",
    instruction: "",
    meetingLink: "",
    adminId: "5",
    duration: "",
    category: "",
    eventLink: "",
    startTime: "",
    endTime: "",
  });
  const navigate = useNavigate();
  const toast = useToast();

  const addEvent = async () => {
    try {
      const response = await PostEventsService(EventValues);

      if (response) {
        localStorage.setItem("eventId", "222222");

        toast({
          title: "Event created",
          description: "Your event has been created successfully!",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate(`/admin/one-on-one-interviews/${response.id}/edit`);
        }, 2000);
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="container">
      <Navbar />
      <OneOnOneCreateNav />

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
        <Box boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)" p="20px">
          <OneOnOneEventsCreateInput
            EventValues={EventValues}
            addEvent={addEvent}
            setEventValues={setEventValues}
          />
        </Box>
      </Box>
    </div>
  );
};

export default OneonOneEventsCreate;
