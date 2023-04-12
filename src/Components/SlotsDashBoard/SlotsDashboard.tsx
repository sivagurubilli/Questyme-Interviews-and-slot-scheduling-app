import {
  CountByAdminSlotsStatusService,
  CountBySlotsStatusService,
} from "../../Services/UserSideServices/SlotBookingServices";
import { SlotsStatus } from "../../Assets/Assets";
import { Box, Flex, FormLabel, Text, useToast } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";

interface SlotsResult {
  meetingStatus: string;
  count: number;
}

const SlotsDashboard = () => {
  const [totalSlots, setTotalSlots] = useState(SlotsStatus);
  const [adminSlots, setAdminSlots] = useState(SlotsStatus);
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const id = userDetails?.user?.id;
  const token = userDetails?.token;
  const name = userDetails?.user?.name;
  const toast = useToast();

  const GetEvents = useCallback(async () => {
    try {
      const response = await CountBySlotsStatusService(token);
      const adminSlotsResponse = await CountByAdminSlotsStatusService(
        id,
        token
      );
      console.log(response,adminSlotsResponse)
      if (response.results) {
        setTotalSlots(response);
      }
      if (adminSlotsResponse.results) {
        setAdminSlots(adminSlotsResponse);
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
  }, [toast, token, id]);

  useEffect(() => {
    GetEvents();
  }, [GetEvents]);

  return (
    <div>
      <Box
        w="80%"
        ml="10%"
        mt="20px"
        minH="120px"
        h="auto"
        p="2%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <Box w="60%" ml="20%">
          <Flex justifyItems="center">
            <FormLabel fontSize="16px" style={{ margin: "0 auto" }}>
              Status of All Slots
            </FormLabel>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Total Slots </Text> <Text>{totalSlots?.totalSlots}</Text>
          </Flex>
          <>
            {totalSlots?.results?.map((el: SlotsResult) => (
              <Flex justifyContent="space-between" key={el.meetingStatus}>
                {el.meetingStatus === "B" ? (
                  <>
                    <Text>Slots Booked</Text>
                    <Text>{el.count}</Text>
                  </>
                ) : null}
                {el.meetingStatus === "U" ? (
                  <>
                    <Text>Slots Unbooked</Text>
                    <Text>{el.count}</Text>
                  </>
                ) : null}
                {el.meetingStatus === "D" ? (
                  <>
                    <Text>Slots Deleted</Text>
                    <Text>{el.count}</Text>
                  </>
                ) : null}
              </Flex>
            ))}
          </>
        </Box>
      </Box>

      <Box
        w="80%"
        ml="10%"
        mt="20px"
        minH="120px"
        h="auto"
        p="2%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <Box w="60%" ml="20%">
          <Flex justifyItems="center">
            <FormLabel fontSize="16px" style={{ margin: "0 auto" }}>
              Status of All Slots for Interviewer {name}
            </FormLabel>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Total Slots </Text> <Text>{adminSlots?.totalSlots}</Text>
          </Flex>
          <>
            {adminSlots?.results?.map((el: SlotsResult) => (
              <Flex justifyContent="space-between" key={el.meetingStatus}>
                {el.meetingStatus === "B" ? (
                  <>
                    <Text>Slots Booked</Text>
                    <Text>{el.count}</Text>
                  </>
                ) : null}
                {el.meetingStatus === "U" ? (
                  <>
                    <Text>Slots Unbooked</Text>
                    <Text>{el.count}</Text>
                  </>
                ) : null}
                {el.meetingStatus === "D" ? (
                  <>
                    <Text>Slots Deleted</Text>
                    <Text>{el.count}</Text>
                  </>
                ) : null}
              </Flex>
            ))}
          </>
        </Box>
      </Box>
    </div>
  );
};

export default SlotsDashboard;
