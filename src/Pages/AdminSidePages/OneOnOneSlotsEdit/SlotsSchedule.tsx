import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Select,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React,{useState} from "react";
import DatePopUp from "./DatePopUp";
import DayAvailability from "./DayAvailability";



//this component is for scheduling slots based on day and date 
const SlotsSchedule = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const isWide = useMediaQuery("(min-width: 600px)");
    const boxWidthDateOverride = useBreakpointValue({ base: "100%", md: "40%" });
    const boxWidth = useBreakpointValue({ base: "100%", md: "60%" });
  
  return (
    <div>
      <Box w="100%" h="auto" border="1px solid grey">
        <Box w="90%" ml="5%" mt="10px" h="auto">
          <FormLabel mt="10px" ml="10px" color="rgb(75 85 99)">
            Time Zone
          </FormLabel>
          <Select ml="10px" w="23%" color="blue" variant="unstyled">
            <option value="">Indian Standard Time</option>
          </Select>
        </Box>

        <Divider mt="20px" />
   
        <Box   h="auto"  display={isWide[0] ? "flex" : "block"}>
          <Box w={boxWidth} h="auto" borderRight="1px solid grey">
            <Box w="90%" ml="5%" mt="10px" h="auto">
              <FormLabel mt="10px" color="rgb(75 85 99)">
                Set your weekly hours
              </FormLabel>

              <Flex justifyContent="space-between">
                <DayAvailability />
              </Flex>
            </Box>
          </Box>
          <Box w={boxWidthDateOverride} >
            <FormLabel p="10px" color="rgb(75 85 99)">
              {" "}
              Add date overrides{" "}
            </FormLabel>

            <Text p="10px">
              Add dates when your availability changes from your weekly hours
            </Text>

            <Button
              ml="5%"
              w="90%"
              mt="30px"
              color="blue"
              bg="white"
              border="1px solid blue"
              variant="outline"
              borderRadius="20px"
              onClick={()=>setIsOpen(true)}
            >
              Add a date overRide
            </Button>
          </Box>
        </Box>

      
      </Box>

      {isOpen ? <DatePopUp   isOpen={isOpen}
        setIsOpen={setIsOpen}
       /> :""}
    </div>
  );
};

export default SlotsSchedule;
