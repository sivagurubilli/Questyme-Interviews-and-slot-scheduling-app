import React, { useState,useEffect } from 'react'
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Calendar from './Calendar';
import { BsClockFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import axios from 'axios'
const StudentBooking = () => {
  const Navigate = useNavigate()
  const [loading, setLoading]=useState(false)

  const [isName,setIsName] = useState([]);
  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:8080/slots')
      .then(response => {
          setIsName(response.data)
          setLoading(false)
        console.log(response, "okre");
        
      })
      .catch(error => {
        console.error(error);
        setLoading(false)
      });
  }, []);
  const handleClick = () => {
    Navigate('/student/booking/details')
  };

  console.log(isName,"nai re")

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
            {loading ? <Box>...Loading</Box>:
             <Box> {isName && isName.map((e, i) => {
              return (<Box key={i}>
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
              </Box>)
            })}</Box> 
          }
          </Box>
        </Flex>
      </Box>
    </Box>

  )
}

export default StudentBooking
