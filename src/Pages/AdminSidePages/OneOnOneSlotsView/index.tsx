
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Divider,
  Flex,
  FormLabel,
  Text,
  useToast,
} from "@chakra-ui/react";
import OneOffModal from "../../../Components/Modals/OneOffModal";
import Navbar from "../../../Components/Navbar/Navbar";
import Calendar from "../../../Components/Calender/Calendar";
import { GetDateOneOffService, GetSlotsService } from "../../../Services/AdminSideServices/GetEventsService";
import { IEventValues } from "../Interfacces";
import { useLocation } from "react-router-dom";
import OneOnOneCreateNav from "../AdminOneOnOneCreate/OneOnOneCreateNav";

interface Islot {
  start: "";
  end: "";
}

const OneOnOneSlotsView = () => {
  const [events, setEvents] = useState<IEventValues[]>();
  const [event, setEvent] = useState<IEventValues>();
  const [dates,setDates] = useState(["2023-04-05","2023-04-06"])
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalBody, setModalBody] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string | Date>("");
  const location = useLocation();
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  const id =userDetails?.user?.id
  const token = userDetails?.token
  const toast = useToast();
const [name,setName] = useState("")

  const GetEvents = useCallback(async () => {
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
  },[id,toast]);

  useEffect(() => {
    GetEvents();
  }, [GetEvents]);

  const GetEventByDate = useCallback(async (date:string)=>{
    try {
      const response = await GetSlotsService(date);
           setName(response)
         
      if (response.length) {
        //setEvents(response);
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
  },[toast])

  //when click on date it should add date to url and set event
  const handleSelect = (arg: { start: Date; end: Date; startStr: string }) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("date", arg.startStr);
    const newUrl = window.location.pathname + "?" + searchParams.toString();
    window.history.pushState({ path: newUrl }, "", newUrl);
    GetEventByDate(arg.startStr)
  };

  //when component render set event based on date get by urlparams
  const setEventByDate = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const dateStr = searchParams.get("date");
    if(dateStr){
    GetEventByDate(dateStr)
    }
  }, [location.search,GetEventByDate]);

  useEffect(() => {
    setEventByDate();
  }, [setEventByDate]);

  return (
    <div className="container">
      <Navbar />
      <OneOnOneCreateNav  NavText = "View All Slots"/>
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
            <Calendar events={events} handleSelect={handleSelect} dates={dates} />
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
            {name}
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
