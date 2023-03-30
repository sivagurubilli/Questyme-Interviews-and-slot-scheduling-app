import React, { useEffect, useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Button, Flex, FormLabel, Select } from "@chakra-ui/react";
import { eventsBydate } from "../../Assets/Assets";
import OneOffModal from "../Modals/OneOffModal";

const Calendar = () => {
  const [events, setEvents] = useState<any>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalBody, setModalBody] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [selectedArg, setSelectedArgs] = useState<any>();

  const handleSelect = (arg: { start: Date; end: Date }) => {
    const day = arg.start.toString();
    setSelectedDay(day);
    setSelectedArgs(arg);
    setIsOpen(true);
  };

  //removing elements by particular day
  const ClearEventsBydate = () => {
  const filteredEvents = events.filter((event:any)=> 
  {
   return  !selectedDay.includes(event.day)
})
   setEvents(filteredEvents);
  };

  const AddSlots = () => {
  let eventExists = false
    // Check if event already exists with the same start and end time 
    const  filterInEvents =(newEvent:any) =>{
      events.forEach((event:any)=>{
        if(selectedDay.includes(event.day) && newEvent.title===event.title){
          eventExists =  true
        }
      })
    }
    eventsBydate.forEach((newEvent) => {
      filterInEvents(newEvent) 
    });

    if (eventExists) { 
      setModalBody("Already times slots added");
      setTimeout(() => {
        setModalBody("")
      }, 2000);
     
    } else {
     const eventsToAdd = eventsBydate.filter((el: any) =>
        selectedDay.includes(el.day)
      );
      // Add the new events to the events array
      setEvents([...events, ...eventsToAdd]);
    
    }
  };
  return (
    <div>
      <Flex>
        <OneOffModal
          setIsOpen={setIsOpen}
          AddSlots={AddSlots}
          isOpen={isOpen}
          modalBody={modalBody}
          ClearEventsBydate={ClearEventsBydate}
        />
        <Box
          boxShadow="0 5px 15px rgba(0,0,0,0.06)"
          h="100vh"
          ml="3px"
          mt="1px"
          bg="white"
          w="20%"
          p="20px"
        >
          <FormLabel>Duration</FormLabel>
          <Select>
            <option>15 mins</option>
            <option>30 mins</option>
            <option>45 mins</option>
            <option>60 mins</option>
            <option>90 mins</option>
          </Select>
           </Box>
         
        <Box w="80%" ml="20px" h="500px" mt="20px" p="20px">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            selectable={true}
            select={handleSelect}
            events={events}
            headerToolbar={{
              start: "today prev,next",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
          />
        </Box>
      </Flex>
    </div>
  );
};

export default Calendar;
