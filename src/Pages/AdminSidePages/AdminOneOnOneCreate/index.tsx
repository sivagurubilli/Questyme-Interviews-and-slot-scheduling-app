import Navbar from '../../../Components/Navbar/Navbar'
import React from 'react'
import OneOnOneCreateNav from './OneOnOneCreateNav'
import { Box, Button, Divider, Flex,FormLabel,Input,Select } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const OneonOneEventsCreate = () => {
const navigate = useNavigate()
const id=1
const GotoSlotsEdit =()=>{
   navigate(`/admin/one-on-one-interviews/edit/${id}`)
}
  return (
    <div className='container'>
        <Navbar />
        <OneOnOneCreateNav />

        <Box
        w="80%"
        ml="10%"
        mt="60px"
        minH="200px"
        h="auto"
        p="5%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <Box  boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)" p="20px" >
         <Flex justifyContent="space-between">
         <FormLabel>Event Location Platform? </FormLabel>
         <Box>
            <Button variant="link">Cancel</Button>
            <Button  borderRadius="16px" colorScheme="blue" ml="20px">Next</Button>
         </Box>
         </Flex>

         <Divider mt="10px" h="2px" />
         <FormLabel  mt="10px"
          color="rgb(75 85 99)">Event name </FormLabel>
         <Input w="40%" />
         <FormLabel mt="10px" color="rgb(75 85 99)">Location</FormLabel>
         <Select   
         w="40%"
           color="rgb(75 85 99)"
                placeholder="Select Categoery">
              <option>Zoom</option>
              <option>Google Meet</option>
         </Select>
         <FormLabel ml="10px" color="rgb(75 85 99)">Duration</FormLabel>
      <Select w="40%">
        <option>15 mins</option>
        <option>30 mins</option>
        <option>45 mins</option>
        <option>60 mins</option>
        <option>90 mins</option>
        <option>120 mins</option>
      </Select>
         <FormLabel mt="20px" color="rgb(75 85 99)">Event link </FormLabel>

         <FormLabel mt="10px" color="rgb(75 85 99)">domainName/userName/ </FormLabel>
         <Input  w="40%" />

         <Divider mt="20px" mb="20px" h="2px" />

         <Flex justifyContent="flex-end">
        
         <Box>
            <Button variant="link">Cancel</Button>
            <Button borderRadius="16px" colorScheme="blue" ml="20px" onClick={GotoSlotsEdit}>Next</Button>
         </Box>

         </Flex>
         </Box>
        </Box>

    </div>
  )
}

export default OneonOneEventsCreate