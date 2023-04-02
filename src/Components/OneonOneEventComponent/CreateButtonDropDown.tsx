import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const CreateButtonDropDown = ({ show, setShow }: any) => {
  const navigate = useNavigate();
  
  const GotoCreateEvent = () => {
    navigate("/admin/one-on-one-interviews/create");
  };

  const GotoOneOffMeet = () => {
    navigate("/admin/one-on-one-interviews/create/on-off-meet");
  };

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        position="absolute"
        width="300px"
        height="auto"
        marginLeft="70%"
        border="1px solid #778087"
        borderRadius="5px"
        boxShadow="0 5px 15px rgba(0,0,0,0.06)"
        backgroundColor="white"
        p={3}
        zIndex="1"
      >
        <Box cursor="pointer" onClick={GotoCreateEvent}>
          <Text color="black" fontSize="18px">
            Event Type
          </Text>
          <Text color="#778087">
            Create new template for your regularly scheduled events
          </Text>
        </Box>
        <Divider mt="5px" />
        <Box cursor="pointer" onClick={GotoOneOffMeet}>
          <Text color="black" fontSize="18px">
            One-off meeting
          </Text>
          <Text color="#778087">
            Invite someone to pick a time to meet with you.
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default CreateButtonDropDown;
