import Navbar from "../../../Components/Navbar/Navbar";
import React, { useState } from "react";
import OneOnOneCreateNav from "./OneOnOneCreateNav";
import { Box, Divider,  FormLabel, useAnimationState, useToast } from "@chakra-ui/react";
import OneOnOneEventsCreateInput from "../../../Components/OneOnOneEventsCreateInput";
import { PostEventsService } from "../../../Services/AdminSideServices/GetEventsService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../Redux/eventById";
import { IOneOnEventValues } from "../Interfacces";


const OneonOneEventsCreate = () => {
  const [EventValues, setEventValues] = useState<IOneOnEventValues>({
    title: "",
    instruction: "",
    meetingLink: "",
    adminId: "5",
    duration: "",
  });

  const dispatch = useDispatch();
  const { SetOneOnOneData } = bindActionCreators(actionCreators, dispatch);
  const navigate = useNavigate();
  const toast = useToast();

  const addEvent = async () => {
    try {
      SetOneOnOneData(EventValues)
      const response = await PostEventsService(EventValues);

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
        <FormLabel>Create Event With Following Values </FormLabel>
    
      <Divider mt="10px" h="2px" />
          <OneOnOneEventsCreateInput
            EventValues={EventValues}
            addEvent={addEvent}
            setEventValues={setEventValues}
            buttonName={"Next"}
          />
        </Box>
      </Box>
    </div>
  );
};

export default OneonOneEventsCreate;
