import { Box, Divider, Flex, Input } from "@chakra-ui/react";
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

type TimeSlot = {
  startTime: string;
  endTime: string;
};

// this popup is for adding time slots for particular date
const DatePopUp = ({ isOpen, setIsOpen }: any) => {
  const handleClose = () => setIsOpen(false);
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

  // onchange set date
  const setDate = (date: any) => {
    setStartDate(date);
    handleAddTimeSlot();
  };

  // adding input for time slots
  const handleAddTimeSlot = () => {
    setTimeSlots([...timeSlots, { startTime: "9:00am", endTime: "5:00am" }]);
  };

  // removing time slots when click on delete
  const handleRemoveTimeSlot = (index: number) => {


    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots.splice(index, 1);
    setTimeSlots(updatedTimeSlots);
  };

  // setting start time for timeslot
  const handleStartTimeChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots[index].startTime = event.target.value;
    setTimeSlots(updatedTimeSlots);
  };

  // setting end time for timeslot
  const handleEndTimeChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots[index].endTime = event.target.value;
    setTimeSlots(updatedTimeSlots);
  };

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
                          <Input
                            mt="5px"
                            w="30%"
                            value={timeSlot.startTime}
                            onChange={(event: any) =>
                              handleStartTimeChange(index, event)
                            }
                          />
                          <Box mt="7px" ml="10px" mr="10px">
                            -
                          </Box>

                          <Input
                            mt="5px"
                            w="30%"
                            value={timeSlot.endTime}
                            onChange={(event: any) =>
                              handleEndTimeChange(index, event)
                            }
                          />

                          <Box mt="10px" ml="10px">
                            {" "}
                            <Button isDisabled ={index===0} onClick={() => handleRemoveTimeSlot(index)} variant="unstyled">
                            <i
                              className="fa-solid fa-trash-can"
                              
                            ></i>{" "}
                            </Button>
                          </Box>
                        </Flex>
                      </Box>

                      <Button variant="unstyled">
                        <i
                          className="fa-solid fa-plus"
                          onClick={handleAddTimeSlot}
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
