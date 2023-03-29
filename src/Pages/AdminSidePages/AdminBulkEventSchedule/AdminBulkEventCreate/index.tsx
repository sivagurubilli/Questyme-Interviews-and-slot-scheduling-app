import React, { useState } from "react";
import { Box, Button, Divider, Flex, FormLabel } from "@chakra-ui/react";
import Navbar from '../../../../Components/Navbar/Navbar'
import BulkEventNav from "./BulkEventNav";

interface IEventValues {
  eventName: string;
  location: string;
  duration: string;
  eventLink: string;
}

const CreateBulkEvent = () => {
  const [EventValues, setEventValues] = useState<IEventValues>({
    eventName: "",
    location: "",
    duration: "",
    eventLink: "",
  });


  return (
    <div className="container">
      <Navbar />
      <BulkEventNav />
      <Box w="80%" ml="10%" mt="60px" minH="200px" h="auto" p="5%" bg="white" borderRadius="10px" boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)">
        <Box margin={"auto"} boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" width={"50%"} p="20px">
          <input type="file" accept={".csv"} />
          <Button>Schedule Interview</Button>
        </Box>
      </Box>
    </div>
  );
};

export default CreateBulkEvent;