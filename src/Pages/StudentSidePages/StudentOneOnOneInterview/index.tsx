import React, { useState } from 'react'
import { Box, Flex, Heading, Text, Button, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Calendar from './Calendar';
import { BsClockFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
const StudentBooking = () => {
  const Navigate = useNavigate()
  const [isDivided, setIsDivided] = useState(false);
  const [isName, setIsName] = useState(["1:00 AM","1:15 AM","1:30 AM","1:45 AM"]);
  const handleClick = () => {
    setIsDivided(true);
    Navigate('/student/booking/details')
  };
  const handleClick2 = () => {
    setIsDivided(false);
   

  }
  return (
    <Box bg='#f3f4f6'>
      <Box boxShadow='base' p={['4', '6']} rounded='md' bg='white' mx={['4', '100px']} my='4'>
        <Flex flexWrap={['wrap', 'nowrap']} justifyContent={['center', 'space-between']} alignItems={['center', 'flex-start']}>
          <Box flexGrow={1} mb={['4', '0']}>
            <Text>Pintu Gouda</Text>
            <Heading as='h4' size={['md', 'lg']} mb={['2', '4']}>
              Counselling session
            </Heading>
            <Flex alignItems='center' mb='2'>
              <Box mt='1px' mr='2' fontSize={['sm', 'md']}>{<BsClockFill />}</Box>
              <Box fontSize={['sm', 'md']}>15 mins</Box>
            </Flex>
            <Flex alignItems='center'>
              <Box mt='1px' mr='2' fontSize={['sm', 'md']}>{<BsFillCameraVideoFill />}</Box>
              <Box fontSize={['sm', 'md']}>Web conferencing details provided upon confirmation.</Box>
            </Flex>
          </Box>
          <Box flexGrow={2} mb={['4', '0']} mr={['0', '20px']}>
            <Heading as='h4' size='md'>
              Select a Date & Time
            </Heading>
            <Calendar />
          </Box>
          <Box flexGrow={1}>
            <Box
              h={{ base: "30px", md: "40px" }}
              borderRadius="10px"
              borderWidth="2px"
              borderColor="blue"
              bg="blue"
              p={{ base: "2px", md: "7px" }}
              textAlign="center"
              maxW="500px"
              w="85%"
              color='white'
              mb='5'
              mt='5'
            >Book slots</Box>
            <Box> {isName.map((e,i)=>{return(<Box key={i}>
              <Box> <Button
                w={["100%", "180px"]}
                size={["sm", "md"]}
                borderColor="blue.500"
                color="blue"
                _hover={{ bg: "blue", color: "white" }}
                onClick={handleClick}
                mt='5'
              >
                {e}
              </Button></Box>

              {/* {isDivided ? (
              <Stack direction={['column', 'row']} spacing='2'>
                
                <Button
                  size={["sm", "md"]}
                  bg="black"
                  color="white"
                  _hover={{ bg: "gray.700" }}
                >
                  {isName}
                </Button> 
                <Button
                  size={["sm", "md"]}
                  borderColor="blue"
                  color="blue"
                  _hover={{ bg: "blue", color: "white" }} 
                  onClick={handleClick2}
                >confirm</Button>
              </Stack>
            ) : (
              <Button
                w={["100%", "180px"]}
                size={["sm", "md"]}
                borderColor="blue.500"
                color="blue"
                _hover={{ bg: "blue", color: "white" }}
                onClick={handleClick}
              >
                {isName}
              </Button>
            )} */}
                  
                  </Box>)})}</Box>
           
          </Box>
        </Flex>
      </Box>
    </Box>

  )
}

export default StudentBooking
