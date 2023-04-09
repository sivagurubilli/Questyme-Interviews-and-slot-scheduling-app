import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Text,
  useToast,
} from "@chakra-ui/react";
import SlotsSchedule from "./SlotsSchedule";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import {
  AddRecurringSlotsService,
} from "../../Services/AdminSideServices/GetEventsService";
import { useNavigate, useParams } from "react-router-dom";
import { DaysForRecurring, DaysForRecurringEvents } from "../../Assets/Assets";

const OneOnOneSlots = ({ isSlotsEdit, setSlotsEdit }: any) => {
  const [days, setDays] = useState(DaysForRecurring);
  const [availability,setAvailability] = useState(DaysForRecurringEvents)
  const state = useSelector((state: RootState) => state);
  const setData = state.SingleEventReducer;
  const [recurringEventDetails,setRecurringEventDetails] = useState({
    name:setData?.setData?.title,
    meetingLink:setData?.setData?.meetingLink,
    duration:setData?.setData?.duration,
    instructions:setData?.setData?.instruction,
    availability:availability

  })
  const toast = useToast();
  const id = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const transformedDays = days.map(day => ({
      name: day.name,
      isChecked: day.isChecked,
      TimeSlot: day.inputs.map(input => ({
        startTime: input.start,
        endTime: input.end
      }))
    }));
    setAvailability(transformedDays);
    setRecurringEventDetails({...recurringEventDetails,availability:availability})
  }, [days,recurringEventDetails,availability]);



  const AddSlots = async () => {
    try {
      const response = await AddRecurringSlotsService(id, recurringEventDetails);
      if (response) {
        toast({
          title: "Slots Added Successfully",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });

        setTimeout(() => {
          navigate("/admin/one-on-one-interviews");
        }, 2000);
      }
    } catch (err) {
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
    <div>
      <Box h="auto" p="20px" mt="5px" border="1px solid grey">
        <Box
          onClick={() => setSlotsEdit(!isSlotsEdit)}
          h="auto"
          cursor="pointer"
          mt="5px"
        >
          <Flex justifyContent="space-between">
            <Box>
              {" "}
              <Flex mt="10px">
                <i
                  style={{ marginTop: "4PX" }}
                  className="fa-regular fa-calendar-days"
                ></i>
                <FormLabel ml="10px" color="rgb(75 85 99)">
                  When can people book this event ?
                </FormLabel>
              </Flex>
              <Flex>
                {" "}
                <Text>{setData?.setData?.title}</Text>{" "}
                <Text ml="20px">{setData?.setData?.duration} Minutes</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Divider mt="20px" mb="20px" h="2px" />
        <FormLabel ml="10px" color="rgb(75 85 99)">
          {" "}
          Set availability time for this event type{" "}
        </FormLabel>

        <SlotsSchedule days={days} setDays={setDays} />

        <Divider mt="20px" mb="20px" h="2px" />
        <Flex justifyContent={"flex-end"}>
          <Box>
            <Button
              variant="link"
              mr="10px"
              onClick={() => setSlotsEdit(!isSlotsEdit)}
            >
              Cancel
            </Button>
            <Button
              size={["sm", "md"]}
              borderRadius="16px"
              colorScheme="blue"
              onClick={AddSlots}
            >
              Add Slots
            </Button>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default OneOnOneSlots;
