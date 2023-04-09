
import React, { useState } from "react";
import { Box, Button, Divider, Flex, FormLabel, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IEventValuescreate } from "../Interfacces";
import {  PostOneOffService } from "../../../Services/AdminSideServices/GetEventsService";
import OneOffEventInput from "../../../Components/OneOffEvents/OneOffEventInput";
import Navbar from "../../../Components/Navbar/Navbar";

const GotoOneOffMeet = () => {
  const [EventValues, setEventValues] = useState<IEventValuescreate>({
    title: "",
    instruction: "",
    meetingLink: "",
    adminId: "5",
    duration: "",
    date:"",
    slotTime:[{startTime: "",
    endTime: ""}]
  });
  const navigate = useNavigate();
  const toast = useToast();

  const addEvent = async () => {
    try {
      const response = await PostOneOffService(EventValues);
      if (response) {
        toast({
          title: "Event created",
          description: "Your event has been created successfully!",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate(`/admin/one-on-one-interviews`);
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
      <Navbar/>
      <Box boxShadow="0 5px 15px rgba(0,0,0,0.06)" h="60px" w="100%" bg="white">
        <Flex justifyContent="space-around">
        <Button colorScheme="blue" mt="10px" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Text fontSize="20px" mt="10px">
            New One-Off Meeting
          </Text>{" "}
            
        </Flex>
      </Box>

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
        <FormLabel>Create OneOff Event With Following Values </FormLabel>
    
      <Divider mt="10px" h="2px" />
          <OneOffEventInput
            EventValues={EventValues}
            addEvent={addEvent}
            setEventValues={setEventValues}
            buttonName={"Create Slots"}
          />
        </Box>
      </Box>
    </div>
  );
};

export default GotoOneOffMeet;
