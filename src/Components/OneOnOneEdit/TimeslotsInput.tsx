import {
  IEventValues,
  IEventValuescreate,
} from "../../Pages/AdminSidePages/Interfacces";
import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { convertTo24Hour } from "../../utils/AddToAm";
interface ITimeslotsIput {
  values: any;
  EventValues: IEventValues;
  setEventValues: React.Dispatch<React.SetStateAction<IEventValuescreate>>;
}

const TimeslotsInput = ({
  values,
  EventValues,
  setEventValues,
}: ITimeslotsIput) => {
  const [timeSlots, setTimeSlots] = useState([
    {
      inputs:{ startTime: "09:00", endTime: "17:00" },
      errors: { startTime: "", endTime: "" },
    },
  ]);

  const [slots, setSlots] = useState([{ startTime: "09:00", endTime: "17:00" }]);

 

  useEffect(() => {
    const newSlots = timeSlots.map((el) => el.inputs);
    if (newSlots) {
      setSlots(newSlots);
    }
  }, [timeSlots]);

  useEffect(() => {
    setEventValues({ ...values, slotTime: slots });
  }, [setEventValues, values, slots]);


  // adding input for time slots
  const handleAddTimeSlot = (index: number) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots.push({
      inputs: { startTime: "", endTime: "" },
      errors: { startTime: "", endTime: "" },
    });
    setTimeSlots(updatedTimeSlots);
  };

  // removing time slots when click on delete
  const handleRemoveTimeSlot = (index: number) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots.splice(index, 1);
    setTimeSlots(updatedTimeSlots);
  };


  // handle input from startTime time and time for slots creation
  const handleInputChange = (
    index: number,
    field: "startTime" | "endTime",
    value: string
  ) => {
    const updatedTimeSlots = [...timeSlots];
    
    updatedTimeSlots[index].inputs[field] = value;
    setTimeSlots(updatedTimeSlots);
    const currentInput = updatedTimeSlots[index].inputs;
    const currentStartTime = convertTo24Hour(currentInput.startTime);
    const currentEndTime = convertTo24Hour(currentInput.endTime);
    const errorFeild = updatedTimeSlots[index].errors;
    const timePattern = /^([1-9]|1[0-2]|0?[1-9]|2[0-3]):[0-5][0-9]$/;

    if (!timePattern.test(currentInput.startTime)) {
      errorFeild[field] = "Please Enter Correct Input ";
    }
   else if (!timePattern.test(currentInput.endTime)) {
      errorFeild[field] = "Please Enter Correct Input ";
    }
    if (index > 0) {
      var previousInput = updatedTimeSlots[index - 1].inputs;
      var previusEndTime = convertTo24Hour(previousInput?.endTime);
      currentInput[field] = value;
    
      if (
        field === "startTime" &&
        previusEndTime &&
        (currentStartTime < previusEndTime || currentStartTime >= currentEndTime)
      ) {
        errorFeild["startTime"] = "Time Scheduling Mismatch"; 
      } else if (field === "endTime" && currentEndTime <= currentStartTime) {
        const errorFeild = updatedTimeSlots[index].errors;
        errorFeild["endTime"] = "Time Scheduling Mismatch";
      } else {
        const errorFeild = updatedTimeSlots[index].errors;
        errorFeild[field] = "";
      }
    } else {
      currentInput[field] = value;

      if (field === "startTime" && currentStartTime >= currentEndTime) {
        const errorFeild = updatedTimeSlots[index].errors;
        errorFeild["startTime"] = "Time Scheduling Mismatch ";
      } else if (field === "endTime" && currentEndTime <= currentStartTime) {
        const errorFeild = updatedTimeSlots[index].errors;
        errorFeild["endTime"] = "Time Scheduling Mismatch";
      } else {
        const errorFeild = updatedTimeSlots[index].errors;
        errorFeild[field] = "";
      }
    }
    setTimeSlots(updatedTimeSlots);
  };



  return (
    <div>
      {timeSlots.map((timeSlot, index) => (
        <Box key={index}>
          <Flex justifyContent="space-between" w="100%">
            <Box>
              <Flex key={index}>
                <Box>
                  <Input
                    mt="5px"
                    w="100%"
                    value={timeSlot.inputs.startTime}
                    onChange={(e) =>
                      handleInputChange(index, "startTime", e.target.value)
                    }
                  />
                  <Text
                    ml="10px"
                    mt="5px"
                    fontSize="12px"
                    display={"block"}
                    color={"red"}
                  >
                    {timeSlot.errors.startTime}
                  </Text>
                </Box>
                <Box mt="7px" ml="10px" mr="10px">
                  -
                </Box>
                <Box>
                  <Input
                    mt="5px"
                    w="100%"
                    value={timeSlot.inputs.endTime}
                    onChange={(e) =>
                      handleInputChange(index, "endTime", e.target.value)
                    }
                  />
                  <Text
                    ml="10px"
                    mt="5px"
                    fontSize="12px"
                    display={"block"}
                    color={"red"}
                  >
                    {timeSlot.errors.endTime}
                  </Text>
                </Box>

                <Box ml="10px">
                  {" "}
                  <Button
                    isDisabled={index === 0}
                    onClick={() => handleRemoveTimeSlot(index)}
                    variant="unstyled"
                  >
                    <i className="fa-solid fa-trash-can"></i>{" "}
                  </Button>
                </Box>
              </Flex>
            </Box>

            <Button variant="unstyled">
              <i
                className="fa-solid fa-plus"
                onClick={() => handleAddTimeSlot(index)}
              ></i>
            </Button>
          </Flex>
          <Divider mt="20px" mb="10px" />
        </Box>
      ))}
    </div>
  );
};

export default TimeslotsInput;
