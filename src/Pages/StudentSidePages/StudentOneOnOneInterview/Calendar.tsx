// import React, { useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';

// // interface EventObject {
// //   remove(): void;
// //   // any other properties or methods of the event object
// // }

// const Calendar = () => {
//     const [lastEvent, setLastEvent] = useState<any>(null);

//     const handleDateClick = (arg: any) => {
//         if (lastEvent) {
//           lastEvent.remove(); // remove previous event
//         }
        
//         const newEvent = {
//           title: 'Clicked',
//           start: arg.date,
//           allDay: true,
//           backgroundColor: 'green',
//         };
        
//         arg.view.calendar.addEvent(newEvent);
//         setLastEvent(arg.event);
//       };
    

//   const eventDidMount = (info: any) => {
//     if (info.event.title === 'Clicked') {
//       info.el.style.backgroundColor = 'green';
//     }
//   };

//   return (
//     <FullCalendar
//       plugins={[dayGridPlugin, interactionPlugin]}
//       initialView="dayGridMonth"
//       dateClick={handleDateClick}
//       eventDidMount={eventDidMount}
//     />
//   );
// };

// export default Calendar;


import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
const Calendar = () => {
  const [lastEvent, setLastEvent] = useState<any>(null);
  const [bookSlot, setBookSlot] =useState<any>([
    {
      title: 'Book',
      start: '2023-03-25',
       allDay: true,
      backgroundColor: 'green',
    },
    {
      title: 'Book',
      start: '2023-03-26',
       allDay: true,
      backgroundColor: 'green',
    },
    {
      title: 'Book',
      start: '2023-03-27',
       allDay: true,
      backgroundColor: 'green',
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
      backgroundColor: 'green',
    };
    
    arg.view.calendar.addEvent(newEvent);
    setLastEvent(arg.event);
  };

  const eventDidMount = (info: any) => {
    if (info.event.backgroundColor === 'green') {
      info.el.style.backgroundColor = 'green';
    }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
      eventDidMount={eventDidMount}
      initialEvents={bookSlot}
    />
  );
};

export default Calendar
