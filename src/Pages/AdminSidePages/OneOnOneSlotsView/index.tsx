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
import {
  DeleteSlotsService,
  GetDateOneOffService,
  GetSlotsForDateService,
} from "../../../Services/AdminSideServices/GetEventsService";
import { IEventValues, ISlotsValues } from "../Interfacces";
import { useLocation } from "react-router-dom";
import OneOnOneCreateNav from "../AdminOneOnOneCreate/OneOnOneCreateNav";

interface Islot {
  start: "";
  end: "";
}

const OneOnOneSlotsView = () => {
  const [events, setEvents] = useState<ISlotsValues[]>([]);
  const [dates, setDates] = useState([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalBody, setModalBody] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string | Date>("");
  const location = useLocation();
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const id = userDetails?.user?.id;
  const token = userDetails?.token;
  const toast = useToast();

  const GetEvents = useCallback(async () => {
    try {
      const response = await GetDateOneOffService(id);
      if (response.dates) {
        setDates(response.dates);
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
  }, [id, toast]);

  useEffect(() => {
    GetEvents();
  }, [GetEvents]);

  const GetEventByDate = useCallback(
    async (date: string) => {
      try {
        const response = await GetSlotsForDateService(id, date, token);

        if (response.length) {
          
          setEvents(response);
        } else {
          setEvents([]);
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
    },
    [toast, token, id]
  );

  const DeleteSlot =async(slotId:any)=>{
    try {
      const response = await DeleteSlotsService(slotId, token);

   if(response){

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
  }

  //when click on date it should add date to url and set event
  const handleSelect = (arg: { start: Date; end: Date; startStr: string }) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("date", arg.startStr);
    const newUrl = window.location.pathname + "?" + searchParams.toString();
    window.history.pushState({ path: newUrl }, "", newUrl);
    setSelectedDay(arg.startStr);
    GetEventByDate(arg.startStr);
   
  };

  //when component render set event based on date get by urlparams
  const setEventByDate = useCallback(() => {
    const searchParams = new URLSearchParams(location.search);
    const dateStr = searchParams.get("date");
    if (dateStr) {
      GetEventByDate(dateStr);
    }
  }, [location.search, GetEventByDate]);

  useEffect(() => {
    setEventByDate();
  }, [setEventByDate]);

  //for gettng current date slot on useEffect
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const now = new Date();
const istOffset = 5.5 * 60 * 60 * 1000; // offset in milliseconds
const istTime = new Date(now.getTime() + istOffset);
const istDate = istTime.toISOString().slice(0, 10);
    searchParams.set("date",  istDate);
    const newUrl = window.location.pathname + "?" + searchParams.toString();
    window.history.pushState({ path: newUrl }, "", newUrl);
    GetEventByDate( istDate);
    setSelectedDay( istDate);
  }, [GetEventByDate]);


  return (
    <div className="container">
      <Navbar />
      <OneOnOneCreateNav NavText=" All Slots Available Slots" />
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
            <Calendar
              events={events}
              handleSelect={handleSelect}
              dates={dates}
            />
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
            {events?.length < 1 ? (
              <Text p="20px">
                No slots are available for <>{selectedDay}</>{" "}
              </Text>
            ) : (
              events?.map((event, index) => (
            
                <Box
                  boxShadow="0 5px 15px rgba(0,0,0,0.06)"
                  p="20px"
                  mt="30px"
                  key={event?.slotId}
                >
                  <Box>
                    <Text> {event?.title}</Text>
                    <Text mb="10px">
                      {" "}
                      <>{event?.date}</>
                    </Text>
                  </Box>

                  <Box>
                    <Flex mt="10px" justifyContent="space-between">
                      <Text>Start - {event.startTime}</Text>
                      <Text>End - {event?.endTime}</Text>
                      {event?.status === "U" ? (
                        <Text color="orange">Not Booked</Text>
                      ) : (
                        <Text color="green"> Booked</Text>
                      )}
                      <Box onClick={()=>DeleteSlot(event.slotId)} cursor={"pointer"}>
                        <i className="fa-solid fa-trash-can"></i>{" "}
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              ))
            )}
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default OneOnOneSlotsView;
