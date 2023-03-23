import React from "react";
import { Box, Text, Divider, Flex, Switch } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ProfilecomponentProps {
  setshow1: (show: boolean) => void;
}

const SettingsComponent = ({ setshow1 }: ProfilecomponentProps) => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        position="absolute"
        width="200px"
        height="auto"
        marginTop="10px"
        marginLeft="7%"
        border="1px solid #778087"
        borderRadius="5px"
        boxShadow="0 5px 15px rgba(0,0,0,0.06)"
        backgroundColor="white"
        p={3}
        zIndex="1"
      >
        <Flex pt="5px">
          <i className="fa-solid fa-pen" style={{ marginTop: "5px" }}></i>
          <Text color="#778087" fontSize="sm" pl="15px">
            <Link to="" onClick={() => setshow1(false)}>
              Edit
            </Link>
          </Text>
        </Flex>
        <Flex pt="5px">
          <i
            className="fa-regular fa-note-sticky"
            style={{ marginTop: "5px" }}
          ></i>
          <Text color="#778087" pl="15px">
            <Link to="" onClick={() => setshow1(false)}>
              Add internal note
            </Link>
          </Text>
        </Flex>
        <Flex pt="5px">
          <i
            className="fa-regular fa-trash-can"
            style={{ marginTop: "5px" }}
          ></i>
          <Text color="#778087" pl="15px">
            <Link to="" onClick={() => setshow1(false)}>
              Delete
            </Link>
          </Text>
        </Flex>
        <Divider mt="10px" borderColor="gray.300" />
        <Flex justifyContent="space-between">
          <Text color="#778087" padding="10px" _hover={{ cursor: "pointer" }}>
            On/Off
          </Text>

          <Switch ml="50px" mt="13px" />
        </Flex>
      </Box>
    </div>
  );
};

export default SettingsComponent;
