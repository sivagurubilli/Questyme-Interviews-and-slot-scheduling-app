// import React, { useState, useEffect } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { useBreakpointValue } from "@chakra-ui/react";
// import "./calendar.css";
// import { getSlots } from "../../../Services/UserSideServices/SlotBookingServices";
// const Calendar = () => {
//   const [loading2, setLoading2] = useState(false);
//   const height = useBreakpointValue({ base: "auto", sm: "800px", md: "500px" });
//   const [bookSlot, setBookSlot] = useState<any>();
//   useEffect(() => {
//     async function fetchSlots() {
//       try {
//         setLoading2(true);
//         const response = await getSlots();
//         setLoading2(false);
//         const events = response.map((date: string) => {
//           return {
//             title: "Book",
//             start: date,
//             allDay: true,
//             backgroundColor: "#28a746",
//           };
//         });
//         setBookSlot(events);
//       } catch (error) {
//         setLoading2(false);
//         console.log(error);
//       }
//     }
//     fetchSlots();
//   }, []);
  

//   const handleDateClick = (arg: any) => {
//     const today = new Date();
//     const clickedDate = new Date(arg.date);
//     if (clickedDate <= today) {
//       return;
//     } 
//   };
//   return (
//     <div>
//       {loading2 ? (
//         <div>...Loading</div>
//       ) : (
//         <FullCalendar
//           plugins={[dayGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           initialEvents={bookSlot}
//           height={height}
//           dateClick={handleDateClick}
//         />
//       )}
//     </div>
//   );
// };
// export default Calendar;
