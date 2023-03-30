import Navbar from "../../../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import OneOnOneCreateNav from "../AdminOneOnOneCreate/OneOnOneCreateNav";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../Redux/eventById";
import { Box, Flex, FormLabel, Text, useToast } from "@chakra-ui/react";
import OneOnOneEdit from "../../../Components/OneOnOneEdit/OneOnOneEdit";
import OneOnOneSlots from "../../../Components/OneOnOneEdit/OneOnOneSlots";
import { useParams } from "react-router-dom";
import { GetSingleEventsService } from "../../../Services/AdminSideServices/GetEventsService";
import AddDateToEvent from "../../../Components/OneOnOneEdit/AddDateToEvent";

interface IEventValues {
  title: string;
  instruction: string;
  meetingLink: string;
  adminId: string;
  id: number;
  duration: string;
  category: string;
  eventLink: string;
  startTime: string;
  endTime: string;
}

//this component is for creating events  slots
const OneonOneSlotsCreate = () => {
  const [isNameEdit, setNameEdit] = useState(false);
  const [isSlotsEdit, setSlotsEdit] = useState(false);
  const [isDateAdd, setDateAdd] = useState(false);
  const dispatch = useDispatch();
  const { GetSingleData } = bindActionCreators(actionCreators, dispatch);
  const [EventValues, setEventValues] = useState<IEventValues>({
    title: "",
    instruction: "",
    meetingLink: "",
    adminId: "5",
    duration: "",
    id: 0,
    category: "",
    eventLink: "",
    startTime: "",
    endTime: "",
  });
  const { id } = useParams();
  const toast = useToast();

  const GetEventById = async () => {
    try {
      const response = await GetSingleEventsService(id);
      GetSingleData(response);
      if (response.id) {
        setEventValues(response);
      }
    } catch (err) {
      toast({
        title: "Something Went Wrong",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    GetEventById();
  }, []);

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
        {isDateAdd ? (
          <AddDateToEvent
            setEventValues={setEventValues}
            EventValues={EventValues}
            isDateAdd={isDateAdd}
            setDateAdd={setDateAdd}
          />
        ) : (
          <Box
            onClick={() => setDateAdd(!isDateAdd)}
            cursor="pointer"
            boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
            p="20px"
            border="1px solid grey"
          >
            <Flex>
              <Box
                mt="12px"
                mr="10px"
                w="20px"
                h="20px"
                borderRadius="50%"
                backgroundColor="violet"
              />
              <FormLabel mt="10px" color="rgb(75 85 99)">
                Add Date For Creating Slots{" "}
              </FormLabel>
            </Flex>

            <Flex>
              {" "}
              <Text>Title of event</Text>{" "}
              <Text ml="20px">Location of event</Text>
            </Flex>
          </Box>
        )}

        {isNameEdit ? (
          <OneOnOneEdit
            setEventValues={setEventValues}
            EventValues={EventValues}
            isNameEdit={isNameEdit}
            setNameEdit={setNameEdit}
          />
        ) : (
          <Box
            onClick={() => setNameEdit(!isNameEdit)}
            cursor="pointer"
            boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
            p="20px"
            mt="5px"
            border="1px solid grey"
          >
            <Flex>
              <Box
                mt="12px"
                mr="10px"
                w="20px"
                h="20px"
                borderRadius="50%"
                backgroundColor="violet"
              />
              <FormLabel mt="10px" color="rgb(75 85 99)">
                What event is this ?{" "}
              </FormLabel>
            </Flex>

            <Flex>
              {" "}
              <Text>Title of event</Text>{" "}
              <Text ml="20px">Location of event</Text>
            </Flex>
          </Box>
        )}

        {isSlotsEdit ? (
          <OneOnOneSlots
            isSlotsEdit={isSlotsEdit}
            setSlotsEdit={setSlotsEdit}
          />
        ) : (
          <Box
            onClick={() => setSlotsEdit(!isSlotsEdit)}
            cursor="pointer"
            boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
            mt="5px"
            p="20px"
            border="1px solid grey"
          >
            <Flex mt="10px">
              <i
                style={{ marginTop: "4PX" }}
                className="fa-regular fa-calendar-days"
              ></i>
              <FormLabel ml="10px" color="rgb(75 85 99)">
                Add Schedule For Creating Slots For This Event ?
              </FormLabel>
            </Flex>
            <Flex>
              {" "}
              <Text>Event Duration</Text>{" "}
              <Text ml="20px">When can people book this event ?</Text>
            </Flex>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default OneonOneSlotsCreate;