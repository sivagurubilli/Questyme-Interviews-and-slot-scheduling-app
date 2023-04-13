import React, { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css"
import { IEventValues } from "../../Pages/AdminSidePages/Interfacces";


interface ICalender {
  events: IEventValues[] | undefined;
  handleSelect: (arg:any) => void;
  dates:string[]
}


const Calendar = ({events,handleSelect,dates}:ICalender)  => {

  const [days,setDays] = useState([])
console.log(dates)
const dateList = dates.map((date)=>({
      title:"slots available",
      date,
      allDay:true
}))



// const dayCellContent = (arg: any) => {
//   const dayIndex = arg.date.getDay();
//   const isDayChecked = days[dayIndex]?.isChecked;
  
//   if (isDayChecked) {
//     return (
//       <div style={{ backgroundColor: 'green', width: '100%', height: '100%', color: 'white' }}>
//         {arg.dayNumberText}
//         <br />
//         Available for this day
//       </div>
//     );
//   } else {
//     return <div>{arg.dayNumberText}</div>;
//   }
// };

  return (
    <div>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            selectable={true}
            select={handleSelect}
            events={dateList}
            contentHeight="600px"
            headerToolbar={{
              start: "today prev,next",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
           // dayCellContent={dayCellContent}
          />
    </div>
  );
};

export default Calendar;
