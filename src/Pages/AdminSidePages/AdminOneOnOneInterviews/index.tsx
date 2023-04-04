import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import OneonOneEventComponent from "../../../Components/OneonOneEventComponent";
import { Box, Grid, useToast } from "@chakra-ui/react";
import OneOnOneEventsNav from "./OneOnOneEventsNav";
import SearchComponent from "../../../Components/SearchComponent";
import { GetAllEventsService } from "../../../Services/AdminSideServices/GetEventsService";

const OneonOneEvents = () => {
  const [oneOnOneEvents, setOneOnOneEvents] = useState([]);
  const toast = useToast();

  useEffect(() => {
    GetEvents();
  }, []);

  const GetEvents = async () => {
    try {
      const response = await GetAllEventsService();
      if (response) {
        setOneOnOneEvents(response);
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

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
          {oneOnOneEvents?.map((el) => (
            <Box key={el}>
              <OneonOneEventComponent event={el} GetEvents={GetEvents} />
            </Box>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default OneonOneEvents;
