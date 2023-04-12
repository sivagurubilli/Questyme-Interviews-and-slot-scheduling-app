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
import { DaysForRecurring, DaysForRecurringEvents, backendResponse } from "../../Assets/Assets";

const OneOnOneSlots = ({ isSlotsEdit, setSlotsEdit }: any) => {
  const [days, setDays] = useState(DaysForRecurring);
  const state = useSelector((state: RootState) => state);
  const setData = state.SingleEventReducer;
  const [availability, setAvailability] = useState<{ 
    name: string; 
    isChecked: boolean; 
    TimeSlot: { 
      startTime: string; 
      endTime: string; 
    }[] 
  }[]>([]);
  const [recurringEventDetails, setRecurringEventDetails] = useState({
    name: setData?.setData?.title,
    meetingLink: setData?.setData?.meetingLink,
    duration: setData?.setData?.duration,
    category: setData?.setData?.category,
    instructions: setData?.setData?.instruction,
    availability: [] as {
      name: string; 
      isChecked: boolean; 
      TimeSlot: { 
        startTime: string; 
        endTime: string; 
      }[] 
    }[]
  });
  const toast = useToast();
  const id = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const transformedDays = days.map(day => {
      if (day.isChecked) {
        return {
          name: day.name,
          isChecked: day.isChecked,
          TimeSlot: day.inputs.map(input => ({
            startTime: input.start,
            endTime: input.end
          }))
        };
      }
      return undefined;
    }).filter(day => day !== undefined) as {
      name: string; 
      isChecked: boolean; 
      TimeSlot: { 
        startTime: string; 
        endTime: string; 
      }[] 
    }[];
  
    if (transformedDays.length > 0) {
      setAvailability(transformedDays);
      setRecurringEventDetails({
        ...recurringEventDetails,
        availability: transformedDays
      });
    }
  }, [days,recurringEventDetails]);
  
 

 

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
