import { Box, Divider, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useMediaQuery,
} from "@chakra-ui/react";

// this popup is for adding time slots for particular date
const DatePopUp = ({ isOpen, setIsOpen }: any) => {
  const handleClose = () => setIsOpen(false);
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [timeSlots, setTimeSlots] = useState([
    {
      inputs: { start: "9:00am", end: "5:00pm" },
      errors: { start: "", end: "" },
    },
  ]);

  // onchange set date
  const setDate = (date: any) => {
    setStartDate(date);
    handleAddTimeSlot(1);
  };

  // adding input for time slots
  const handleAddTimeSlot = (index: number) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots.push({
      inputs: { start: "9:00am", end: "5:00pm" },
      errors: { start: "", end: "" },
    });

    setTimeSlots(updatedTimeSlots);
  };

  // removing time slots when click on delete
  const handleRemoveTimeSlot = (index: number) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots.splice(index, 1);
    setTimeSlots(updatedTimeSlots);
  };

  // handle input from start time and time for slots creation
  const handleInputChange = (
    index: number,

    field: "start" | "end",
    value: string
  ) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots[index].inputs[field] = value;
    setTimeSlots(updatedTimeSlots);

    const currentInput = updatedTimeSlots[index].inputs;
    const currentStart = convertTo24Hour(currentInput.start);
    const currentEnd = convertTo24Hour(currentInput.end);
    const timePattern = /^([1-9]|1[0-2]):[0-5][0-9][ap]m$/i;

    const errorFeild = updatedTimeSlots[index].errors;

    if (!timePattern.test(currentStart) || !timePattern.test(currentEnd)) {
      errorFeild["start"] = "Please Enter Correct Input ";
    } else if (index > 0) {
      var previousInput = updatedTimeSlots[index - 1].inputs;
      var previusEnd = convertTo24Hour(previousInput?.end);

      currentInput[field] = value;

      if (
        field === "start" &&
        previusEnd &&
        (currentStart < previusEnd || currentStart >= currentEnd)
      ) {
        errorFeild[field] = "Time Scheduling Mismatch";
      } else if (field === "end" && currentEnd <= currentStart) {
        const errorFeild = updatedTimeSlots[index].errors;
        errorFeild[field] = "Time Scheduling Mismatch";
      } else {
        const errorFeild = updatedTimeSlots[index].errors;
        errorFeild[field] = "";
      }
    } else {
      currentInput[field] = value;

      if (field === "start" && currentStart >= currentEnd) {
        const errorFeild = updatedTimeSlots[index].errors;
        errorFeild[field] = "Time Scheduling Mismatch ";
      } else if (field === "end" && currentEnd <= currentStart) {
        const errorFeild = updatedTimeSlots[index].errors;
        errorFeild[field] = "Time Scheduling Mismatch";
      } else {
        const errorFeild = updatedTimeSlots[index].errors;
        errorFeild[field] = "";
      }
    }
    setTimeSlots(updatedTimeSlots);
  };

  function convertTo24Hour(time: string) {
    const [hour, minute] = time.split(":");
    const period = time.slice(-2);

    let hour24 = parseInt(hour);
    if (hour24 === 12) {
      hour24 = 0;
    }
    if (period === "pm") {
      hour24 += 12;
    }

    return `${hour24.toString().padStart(2, "0")}:${minute}`;
  }

  return (
    <div>
      <Modal isOpen={isOpen} size="lg" onClose={handleClose}>
        <ModalContent>
          <ModalBody>
            <Box h="300px">
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setDate(date)}
              />
              <Box w="400px">
                {timeSlots.map((timeSlot, index) => (
                  <Box key={index}>
                    <Flex justifyContent="space-between" w="100%">
                      <Box>
                        <Flex key={index}>
                          <Box>
                            <Input
                              mt="5px"
                              w="100%"
                              value={timeSlot.inputs.start}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "start",
                                  e.target.value
                                )
                              }
                            />
                            <Text
                              ml="10px"
                              mt="5px"
                              fontSize="12px"
                              display={"block"}
                              color={"red"}
                            >
                              {timeSlot.errors.start}
                            </Text>
                          </Box>
                          <Box mt="7px" ml="10px" mr="10px">
                            -
                          </Box>
                          <Box>
                            <Input
                              mt="5px"
                              w="100%"
                              value={timeSlot.inputs.end}
                              onChange={(e) =>
                                handleInputChange(index, "end", e.target.value)
                              }
                            />
                            <Text
                              ml="10px"
                              mt="5px"
                              fontSize="12px"
                              display={"block"}
                              color={"red"}
                            >
                              {timeSlot.errors.end}
                            </Text>
                          </Box>

                          <Box mt="10px" ml="10px">
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
                    <Divider mt="10px" mb="10px" />
                  </Box>
                ))}
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              h={isLargerThan900 ? "35px" : "auto"}
              color="white"
              bg="rgb(31 41 55)"
              minH="30px"
              ml="20px"
              _hover={{ bg: "rgb(76, 84, 95)" }}
              onClick={handleClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DatePopUp;
