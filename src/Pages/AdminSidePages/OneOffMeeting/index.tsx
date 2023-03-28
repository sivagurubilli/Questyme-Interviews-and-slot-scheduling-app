import Calendar from "../../../Components/Calender/Calendar";
import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const GotoOneOffMeet = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Box boxShadow="0 5px 15px rgba(0,0,0,0.06)" h="60px" w="100%" bg="white">
        <Flex justifyContent="space-around">
          <Text fontSize="20px" mt="10px">
            New One-Off Meeting
          </Text>{" "}
             <Flex>
          <Button colorScheme="blue" mt="10px" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button colorScheme="blue" mt="10px" ml='20px'>
              Next
            </Button>
            </Flex>
        </Flex>
      </Box>

      <Calendar />
    </div>
  );
};

export default GotoOneOffMeet;
