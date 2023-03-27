import Navbar from "../../../Components/Navbar/Navbar";
import React, { useState } from "react";
import OneOnOneCreateNav from "./OneOnOneCreateNav";
import { Box, Divider, Flex, FormLabel } from "@chakra-ui/react";

import OneOnOneEventsCreateInput from "../../../Components/OneOnOneEventsCreateInput";

interface IEventValues {
  eventName: string;
  location: string;
  duration: string;
  eventLink: string;
}

const OneonOneEventsCreate = () => {
  const [EventValues, setEventValues] = useState<IEventValues>({
    eventName: "",
    location: "",
    duration: "",
    eventLink:"",
  });


  return (
    <div className="container">
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
        <Box boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)" p="20px">
          <Flex justifyContent="space-between">
            <FormLabel>Event Location Platform? </FormLabel>
          </Flex>

          <Divider mt="10px" h="2px" />
          <OneOnOneEventsCreateInput
            EventValues={EventValues}
            setEventValues={setEventValues}
            SubmitVal="Next"
          />
        </Box>
      </Box>
    </div>
  );
};

export default OneonOneEventsCreate;
