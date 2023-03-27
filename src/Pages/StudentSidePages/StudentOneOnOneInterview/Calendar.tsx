
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
      start: '2023-03-25',
       allDay: true,
      backgroundColor: 'blue',
    },
    {
      title: 'Book',
      start: '2023-03-26',
       allDay: true,
      backgroundColor: 'blue',
    },
    {
      title: 'Book',
      start: '2023-03-27',
       allDay: true,
      backgroundColor: 'blue',
    },
  ])

  const handleDateClick = (arg: any) => {
    if (lastEvent) {
      lastEvent.remove(); // remove previous event
    }
    
    const newEvent = {
      title: 'Clicked',
      start: arg.date,
      allDay: true,
      backgroundColor: 'blue',
    };
    
    arg.view.calendar.addEvent(newEvent);
    setLastEvent(arg.event);
  };

  const eventDidMount = (info: any) => {
    if (info.event.backgroundColor === 'blue') {
      info.el.style.backgroundColor = 'blue';
    }
  };

  return (
    <FullCalendar
    plugins={[dayGridPlugin, interactionPlugin]}
    initialView="dayGridMonth"
    dateClick={handleDateClick}
    eventDidMount={eventDidMount}
    initialEvents={bookSlot}
    height={height}
  />
  );
};

export default Calendar
