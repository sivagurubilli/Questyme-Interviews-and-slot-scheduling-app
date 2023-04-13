import Navbar from "../../../Components/Navbar/Navbar";
import React, { useState } from "react";
import OneOnOneCreateNav from "./OneOnOneCreateNav";
import { Box, Divider,  FormLabel} from "@chakra-ui/react";
import OneOnOneEventsCreateInput from "../../../Components/OneOnOneEventsCreateInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../Redux/eventById";
import { IOneOnEventValues } from "../Interfacces";
import { id} from "../../../Assets/Assets";


const OneonOneEventsCreate = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const id = userDetails?.user?.id;
  const token = userDetails?.token;
  const [EventValues, setEventValues] = useState<IOneOnEventValues>({
    title: "",
    instruction: "",
    meetingLink: "",
    adminId: id,
    category:"",
    duration: "",
  });
<<<<<<< HEAD



=======
>>>>>>> master
  const dispatch = useDispatch();
  const { SetOneOnOneData } = bindActionCreators(actionCreators, dispatch);
  const navigate = useNavigate();

<<<<<<< HEAD
  const addEvent = async () => {
=======


  const addEvent = async () => {
  
>>>>>>> master
    SetOneOnOneData(EventValues)
    setTimeout(() => {
      navigate(`/admin/add-availability`);
    }, 1000);
  }

  return (
    <div className="container">
      <Navbar />
      <OneOnOneCreateNav  NavText ="Add One-On-One Event Type"/>

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
