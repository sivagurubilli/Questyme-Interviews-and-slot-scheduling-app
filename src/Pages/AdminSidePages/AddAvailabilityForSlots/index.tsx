import React, { useState } from 'react'
import OneOnOneSlots from "../../../Components/AddAvailabilityToOneOnOne/OneOnOneSlots";
import { Box, Flex, FormLabel, Text } from '@chakra-ui/react';
import OneOnOneCreateNav from '../AdminOneOnOneCreate/OneOnOneCreateNav';
import Navbar from '../../../Components/Navbar/Navbar';

const AddDaysAvailability= () => {

    const [isSlotsEditOpen, setSlotsEditOpen] = useState(false);

  return (
    
         <div className="container">
      <Navbar />
      <OneOnOneCreateNav  NavText = "Add  Availability For One-On-One Event"/>
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
        {isSlotsEditOpen ? (
          <OneOnOneSlots
            isSlotsEdit={isSlotsEditOpen}
            setSlotsEdit={setSlotsEditOpen}
          />
        ) : (
          <Box
            onClick={() => setSlotsEditOpen(!isSlotsEditOpen)}
            cursor="pointer"
            boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
            mt="5px"
            p="20px"
            border="1px solid grey"
          >
            <Flex mt="10px">
              <i
                style={{ marginTop: "4PX" }}
                className="fa-regular fa-calendar-days"
              ></i>
              <FormLabel ml="10px" color="rgb(75 85 99)">
                Add Schedule For Creating Slots For This Event ?
              </FormLabel>
            </Flex>
            <Flex>
              {" "}
              <Text>Event Duration</Text>{" "}
              <Text ml="20px">When can people book this event ?</Text>
            </Flex>
          </Box>
        )}
    </Box>
    </div>
  )
}

export default AddDaysAvailability