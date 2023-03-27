import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import OneonOneEventComponent from "../../../Components/OneonOneEventComponent";
import { Box, Grid } from "@chakra-ui/react";
import OneOnOneEventsNav from "./OneOnOneEventsNav";
import SearchComponent from "../../../Components/SearchComponent";

const OneonOneEvents = () => {
  return (
    <div className="container">
      <Navbar />
      <OneOnOneEventsNav />

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
        <SearchComponent />

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
