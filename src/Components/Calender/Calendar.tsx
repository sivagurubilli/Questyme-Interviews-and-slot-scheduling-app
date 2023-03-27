import React from 'react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from "@fullcalendar/interaction"
import { Box, Button, Flex } from '@chakra-ui/react'


const Calendar = () => {

  const events = [
    {
      title: 'Meeting with John',
      start: new Date('2023-03-28T10:30:00'),
      end: new Date('2023-03-28T12:30:00')
    },
    {
      title: 'Lunch with Jane',
      start: new Date('2023-03-29T12:00:00'),
      end: new Date('2023-03-29T13:00:00')
    },
    // Add more events here
  ];

  return (
    <div>
   
    <Flex>
     <Box  boxShadow="0 5px 15px rgba(0,0,0,0.06)" h="100vh" 
     ml="3px" mt="1px" bg="white" w="20%">

     </Box>

     <Box
        position="fixed"
       mt="520px"
      
        zIndex="1"
        boxShadow="0 5px 15px rgba(0,0,0,0.06)"
        h="80px"
      w="10%"
      ml="90%"
        
      >
        <Flex justifyContent="flex-end">
          <Button colorScheme="blue" mt="20px">
            Next
          </Button>
        </Flex>
      </Box>

     <Box w="70%" ml='20px' h="500px"  mt="20px">
   <FullCalendar plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
   initialView ={"dayGridMonth"}
   events={events}
   headerToolbar ={{
    start:"today prev,next",
    center:"title",
    end:"dayGridMonth,timeGridWeek,timeGridDay"

   }}
   />
   </Box>
   </Flex>
   
    </div>
  )
}

export default Calendar