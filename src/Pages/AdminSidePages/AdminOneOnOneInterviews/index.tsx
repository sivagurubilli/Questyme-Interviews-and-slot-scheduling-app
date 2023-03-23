import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import OneonOneEventComponent from "../../../Components/OneonOneEventComponent";
import { Box, Flex, Grid, Input } from "@chakra-ui/react";
import OneOnOneEventsNav from "./OneOnOneEventsNav";

const OneonOneEvents = () => {
  return (
    <div className="container">
      <Navbar />
  <OneOnOneEventsNav/>

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
        <Box>
          <Flex mb="10px">
            <i
              style={{ padding: "10px", color: "#778087" }}
              className="fa-solid fa-magnifying-glass"
            ></i>
            <Input
              variant="unstyled"
              w="300px"
              placeholder="Filter Events By Title"
            ></Input>
          </Flex>
        </Box>

        <Grid
          mt={4}
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          gap={4}
        >
          <OneonOneEventComponent />
          <OneonOneEventComponent />
          <OneonOneEventComponent />
          <OneonOneEventComponent />
        </Grid>
      </Box>
    </div>
  );
};

export default OneonOneEvents;
