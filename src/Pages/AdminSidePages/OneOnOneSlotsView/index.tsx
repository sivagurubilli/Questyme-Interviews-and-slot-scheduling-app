import Navbar from "../../../Components/Navbar/Navbar";
import React, { useCallback, useEffect, useState } from "react";
import SlotsViewNavbar from "./SlotsViewNavbar";
import Calendar from "../../../Components/Calender/Calendar";
import {
  Box,
  Divider,
  Flex,
  FormLabel,
  Text,
  useToast,
} from "@chakra-ui/react";
import OneOffModal from "../../../Components/Modals/OneOffModal";
import { GetAllEventsService, GetDateOneOffService } from "../../../Services/AdminSideServices/GetEventsService";
import { IEventValues } from "../Interfacces";
import { useLocation } from "react-router-dom";

interface Islot {
  start: "";
  end: "";
}

const OneOnOneSlotsView = () => {
  const [events, setEvents] = useState<IEventValues[]>();
  const [event, setEvent] = useState<IEventValues>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalBody, setModalBody] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string | Date>("");
  const location = useLocation();
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  const id =userDetails.user.id
  const token = userDetails.token

  const toast = useToast();
  const GetEvents = async () => {
    try {
      const response = await GetDateOneOffService(id);
      if (response.length) {
        setEvents(response);
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
    GetEvents();
  }, []);

  //when click on date it should add date to url and set event
  const handleSelect = (arg: { start: Date; end: Date; startStr: string }) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("date", arg.startStr);
    const newUrl = window.location.pathname + "?" + searchParams.toString();
    window.history.pushState({ path: newUrl }, "", newUrl);
    const event = events?.find((el) => el.date === arg.startStr);
    if (event) {
      setEvent(event);
    } else {
      setEvent({});
    }
  };

  //when component render set event based on date get by urlparams
  const setEventByDate = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const dateStr = searchParams.get("date");
    if (dateStr) {
      const event = events?.find((el) => el.date === dateStr);
      setEvent(event);
    } else {
      setEvent({});
    }
  }, [location.search, events]);

  useEffect(() => {
    setEventByDate();
  }, [setEventByDate]);

  return (
    <div className="container">
      <Navbar />
      <SlotsViewNavbar />
      <Box
        boxShadow="0 5px 15px rgba(0,0,0,0.06)"
        h="auto"
        ml="5%"
        mt="50px"
        bg="white"
        w="90%"
        p="2%"
        pb="100px"
      >
        <Flex>
          <Box
            boxShadow="0 5px 15px rgba(0,0,0,0.06)"
            w="60%"
            ml="20px"
            h="auto"
            p="20px"
          >
            <Calendar events={events} handleSelect={handleSelect} />
          </Box>
          <Box
            boxShadow="0 5px 15px rgba(0,0,0,0.06)"
            h="auto"
            ml="20px"
            bg="white"
            w="40%"
            p="20px"
          >
            <FormLabel>All Slots On Particular Date</FormLabel>

            <Divider />
            {event?.id && (
              <Box
                boxShadow="0 5px 15px rgba(0,0,0,0.06)"
                p="20px"
                mt="30px"
                key={event?.title}
              >
                <Text> {event?.title}</Text>
                <Text mb="10px">
                  {" "}
                  <>{event?.date}</>
                </Text>
                {event?.slots?.map((slot: any, index: number) => (
                  <Box>
                    <Flex mt="10px" justifyContent="space-between" key={index}>
                      <Text>Start - {slot?.start}</Text>
                      <Text>End - {slot?.end}</Text>
                      <Text color="green"> Booked</Text>
                      <Box cursor={"pointer"}>
                        <i className="fa-solid fa-trash-can"></i>{" "}
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default OneOnOneSlotsView;
