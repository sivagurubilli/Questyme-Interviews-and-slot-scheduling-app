import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Text, Button, useToast } from "@chakra-ui/react";
import { BsClockFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import {
  getSlotDays,
  getSlots,
} from "../../../Services/UserSideServices/SlotBookingServices";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useBreakpointValue } from "@chakra-ui/react";
import "./calendar.css";
import axios from "axios";
import Navbar from "./../../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";

const StudentBooking = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [isName, setIsName] = useState([]);
  const toast = useToast();
  const [loading2, setLoading2] = useState(false);
  const height = useBreakpointValue({ base: "auto", sm: "800px", md: "500px" });
  const [bookSlot, setBookSlot] = useState<any>();
  useEffect(() => {
    async function fetchSlotsDays(id: any) {
      try {
        setLoading2(true);
        const response = await getSlotDays(id);
        setLoading2(false);

        if (response.length) {
          const events = response.map((date: string) => {
            return {
              title: "Book",
              start: date,
              allDay: true,
              backgroundColor: "#28a746",
            };
          });
          setBookSlot(events);
        } else {
          setBookSlot([]);
        }
      } catch (error) {
        setLoading2(false);
        console.log(error);
      }
    }
    fetchSlotsDays(id);
  }, [id]);
  async function fetchSlot(clickedDate: string) {
    try {
      setLoading(true);
      const response = await getSlots(clickedDate);
      setIsName(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const handleClick = async (e: any) => {
    try {
      const userId = 30195;
      const response = await axios.post(
        `https://b952-27-116-40-42.in.ngrok.io/slot/bookslot/${e.slotId}/user/${userId}`
      );
      toast({
        title: "Event scheduled",
        description: "Your event has been scheduled successfully!",
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Something Went Wrong",
        description: "Your event hasn't been scheduled successfully!",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleDateClick = (arg: any) => {
    const today = new Date();
    const clickedDate = new Date(
      arg.date.getTime() - arg.date.getTimezoneOffset() * 60 * 1000
    );
    const clickedDateStr = clickedDate.toISOString().substr(0, 10);
    // if (clickedDate < today) {
    //   return;
    // } else {
     
    // }
    fetchSlot(clickedDateStr);
  };

  return (
    <Box bg="#f3f4f6">
      <Navbar />
      <Box
        boxShadow="base"
        p={["4", "6"]}
        rounded="md"
        bg="white"
        mx={["4", "100px"]}
        my="4"
      >
        <Flex
          flexWrap={["wrap", "nowrap"]}
          justifyContent={["center", "space-between"]}
          alignItems={["center", "flex-start"]}
        >
         
          <Box
            flexGrow={2}
            mb={["4", "0"]}
            mr={["0", "20px"]}
            maxW={["none", "600px"]}
            w={["100%", "70%"]}
          >
            <Heading as="h4" size="md">
              Select a Date & Time
            </Heading>
            {/* <Calendar /> */}
             <Box>
              {loading2 ? (
                <div>...Loading</div>
              ) : (
                <FullCalendar
                  plugins={[dayGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  initialEvents={bookSlot}
                  height={height}
                  dateClick={handleDateClick}
                />
              )}
            </Box>
          </Box>
          <Box flexGrow={1} mb={["4", "0"]}>
            <Text>Pintu Gouda</Text>
            <Heading as="h4" size={["md", "lg"]} mb={["2", "4"]}>
              Counselling session
            </Heading>
            <Flex alignItems="center" mb="2">
              <Box mt="1px" mr="2" fontSize={["sm", "md"]}>
                {<BsClockFill />}
              </Box>
              <Box fontSize={["sm", "md"]}>15 mins</Box>
            </Flex>
            <Flex alignItems="center">
              <Box mt="1px" mr="2" fontSize={["sm", "md"]}>
                {<BsFillCameraVideoFill />}
              </Box>
              <Box fontSize={["sm", "md"]}>
                Web conferencing details provided upon confirmation.
              </Box>
            </Flex>
          </Box>
          <Box flexGrow={1}>
            {isName ? (
              <Button
                w={["100%", "180px"]}
                size={["sm", "md"]}
                borderColor="blue.500"
                color="white"
                bg="blue"
                mt="5"
              >
                Book Slot
              </Button>
            ) : (
              <Box></Box>
            )}
            {loading ? (
              <Box>...Loading</Box>
            ) : (
              <Box>
                {" "}
                {isName?.map((e: any, i: number) => {
                  return (
                    <Box key={i}>
                      <Box>
                        {" "}
                        <Button
                          w={["100%", "180px"]}
                          size={["sm", "md"]}
                          borderColor="blue.500"
                          color="blue"
                          _hover={{ bg: "blue", color: "white" }}
                          onClick={() => handleClick(e)}
                          mt="5"
                        >
                          {e.startTime}
                        </Button>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default StudentBooking;
