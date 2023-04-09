import React, { useState } from "react";
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react';

const OneOnOneEventsNav = () => {

const navigate = useNavigate()

  const GotoSlotsViewPage = () => {
    navigate(`/slot/${1}`);
  };
  const GotoCreateEvent = () => {
    navigate("/admin/one-on-one-interviews/create");
  };

  const GotoOneOffMeet = () => {
    navigate("/admin/one-on-one-interviews/create/on-off-meet");
  };

  return (
    <div>
      <Box
        position="relative"
        h="auto"
        marginTop="2px"
        bg="whiteAlpha.900"
        w="100%"
      >
        <Box boxShadow="sm">
          <Flex
            position={"relative"}
            w={"97%"}
            align="center"
            m="auto"
            h={"60px"}
            justifyContent={"flex-end"}
            color={"gray.600"}
          >
               <Button
              onClick={() => navigate("/admin/dashboard")}
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr="30px"
              >
               Back
              </Button>
             <Button
                leftIcon={<FaEye />}
                onClick={()=>GotoSlotsViewPage()}
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr="30px"
              >
                View Slots
              </Button>
           
              <Button
                leftIcon={<FaPlus />}
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr="110px"
              >
               <Popover>
      <PopoverTrigger>
        <button>Create</button>
      </PopoverTrigger>
      <PopoverContent mt="10px">
        <PopoverBody>
        <Box cursor="pointer" onClick={GotoCreateEvent}>
          <Text color="black" fontSize="18px">
            Event Type
          </Text>
          <Text color="#778087">
            Create new template for  events
          </Text>
        </Box>
        <Divider mt="5px" />
        <Box cursor="pointer" onClick={GotoOneOffMeet}>
          <Text color="black" fontSize="18px">
            One-off meeting
          </Text>
          <Text color="#778087">
           Create a One-Off-Meeting
          </Text>
        </Box>
    
        </PopoverBody>
      </PopoverContent>
    </Popover>
              </Button>

           
          </Flex>
          
        </Box>
      </Box>
    </div>
  );
};

export default OneOnOneEventsNav;
