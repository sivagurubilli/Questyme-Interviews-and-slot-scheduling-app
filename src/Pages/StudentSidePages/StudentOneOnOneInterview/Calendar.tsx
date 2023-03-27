
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useBreakpointValue } from "@chakra-ui/react";
 import './calendar.css';
const Calendar = () => {
  const height = useBreakpointValue({ base: "auto", sm: "800px", md: "450px" });
  const [lastEvent, setLastEvent] = useState<any>(null);
  const [bookSlot, setBookSlot] =useState<any>([
    {
      title: 'Book',
      start: '2023-03-28',
       allDay: true,
      backgroundColor: 'blue',
    },
    {
      title: 'Book',
      start: '2023-03-29',
       allDay: true,
      backgroundColor: 'blue',
    },
    {
      title: 'Book',
      start: '2023-03-30',
       allDay: true,
      backgroundColor: 'blue',
    },
  ])

  const handleDateClick = (arg: any) => {
    const today = new Date();
    const clickedDate = new Date(arg.date);
  
    if (clickedDate <= today) {
      return; // do nothing if clicked date is in the past
    }else{
      console.log(arg.dateStr)
    }
    
  };

 

  return (
 
  <FullCalendar
  plugins={[dayGridPlugin, interactionPlugin]}
  initialView="dayGridMonth"
  initialEvents={bookSlot}
  height={height}
  dateClick={handleDateClick}
/>
  );
};

export default Calendar
