import React, { useState } from 'react'
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'
import Calendar from './Calendar';
import { BsClockFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
const StudentBooking = () => {
  const [isDivided, setIsDivided] = useState(false);
  const [isName, setIsName] = useState("9:00 AM");
  const handleClick = () => {
    setIsDivided(true);
  };
  const handleClick2 = () => {
    setIsDivided(false);
    setIsName("confirmed")

  }
  return (
    <Box boxShadow='base' p='6' rounded='md' bg='white' m='100px'>
      <Flex flexWrap="wrap" justifyContent="space-between" >
        <Box flexGrow={1} >
          <Text>Pintu Gouda</Text>
          <Heading as='h4' size='md'>
            Counselling session
          </Heading>
          <Flex><Box mt='5px' mr='5px'>{<BsClockFill />} </Box><Box>15 mins</Box></Flex>
          <Flex><Box mt='5px' mr='5px'>{<BsFillCameraVideoFill />} </Box><Box>Web conferencing details provided upon confirmation.</Box></Flex>
        </Box>
        <Box flexGrow={1}  >
          <Calendar />
        </Box>
        <Box flexGrow={1} ml='20px' >
          {isDivided ? (
            <div>
              <Button>9:00 AM</Button>
              <Button onClick={handleClick2}>confirm</Button>
            </div>
          ) : (
            <Button w='180px' onClick={handleClick}>{isName}</Button>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default StudentBooking
