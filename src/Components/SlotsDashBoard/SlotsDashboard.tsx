import {
  CountByAdminSlotsStatusService,
  CountBySlotsStatusService,
} from "../../Services/UserSideServices/SlotBookingServices";
import { SlotsStatus } from "../../Assets/Assets";
import { Box, Flex, FormLabel, useToast } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import SlotsStatsTable from "./SlotsStatsTable";

const SlotsDashboard = () => {
  const [totalSlots, setTotalSlots] = useState(SlotsStatus);
  const [adminSlots, setAdminSlots] = useState(SlotsStatus);
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const id = userDetails?.user?.id;
  const token = userDetails?.token;
  const name = userDetails?.user?.name;
  const toast = useToast();


  console.log(adminSlots)
  const GetEvents = useCallback(async () => {
    try {
      const response = await CountBySlotsStatusService(token);
      const adminSlotsResponse = await CountByAdminSlotsStatusService(
        id,
        token
      );
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
              Update on Slot Availability
            </FormLabel>
          </Flex>
          <SlotsStatsTable totalInterviews={totalSlots} />
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
              Current Availability of All Your Slots
            </FormLabel>
          </Flex>

          <SlotsStatsTable totalInterviews={adminSlots} />
        </Box>
      </Box>
    </div>
  );
};

export default SlotsDashboard;
