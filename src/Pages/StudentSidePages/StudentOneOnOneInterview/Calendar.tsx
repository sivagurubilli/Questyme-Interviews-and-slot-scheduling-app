import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useBreakpointValue } from "@chakra-ui/react";
import axios from "axios";
import "./calendar.css";
const Calendar = () => {
  const [loading, setLoading] = useState(false);
  const height = useBreakpointValue({ base: "auto", sm: "800px", md: "500px" });
  const [bookSlot, setBookSlot] = useState<any>();
  
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/slotstesting")
      .then((response) => {
        setLoading(false);
        const events = response.data[1].map((date:string)=> {
          return {
            title: "Book",
            start: date,
            allDay: true,
            backgroundColor: "#28a746"
          };
        });
        setBookSlot(events);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  const handleDateClick = (arg: any) => {
    const today = new Date();
    const clickedDate = new Date(arg.date);

    if (clickedDate <= today) {
      return;
    } else {
      console.log(arg.dateStr);
    }
  };
  return (
    <div>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialEvents={bookSlot}
          height={height}
          dateClick={handleDateClick}
        />
      )}
    </div>
  );
};
export default Calendar;
