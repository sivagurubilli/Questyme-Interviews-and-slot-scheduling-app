import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormLabel,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import "./index.css";
//this component is for schedule slots based on availability setting of days
const DayAvailability = () => {
  // setting state for slots availability  for particular day



  const [days, setDays] = useState([
    {
      name: "Sun",
      isChecked: true,
      inputs: [{ start: "9:00am", end: "5:00pm" }],
      errors: [{ start: "", end: "" }],
    },
    {
      name: "Mon",
      isChecked: true,
      inputs: [{ start: "9:00am", end: "5:00pm" }],
      errors: [{ start: "", end: "" }],
    },
    {
      name: "Tue",
      isChecked: true,
      inputs: [{ start: "9:00am", end: "5:00pm" }],
      errors: [{ start: "", end: "" }],
    },
    {
      name: "Wed",
      isChecked: true,
      inputs: [{ start: "9:00am", end: "5:00pm" }],
      errors: [{ start: "", end: "" }],
    },
    {
      name: "Thu",
      isChecked: true,
      inputs: [{ start: "9:00am", end: "5:00pm" }],
      errors: [{ start: "", end: "" }],
    },
    {
      name: "Fri",
      isChecked: true,
      inputs: [{ start: "9:00am", end: "5:00pm" }],
      errors: [{ start: "", end: "" }],
    },
    {
      name: "Sat",
      isChecked: true,
      inputs: [{ start: "9:00am", end: "5:00pm" }],
      errors: [{ start: "", end: "" }],
    },
  ]);

  const DayboxWidth = useBreakpointValue({ base: "70px", md: "70px" });

  // handle checkbox value change on checked
  const handleCheckboxChange = (index: number) => {
    const updatedDays = [...days];
    updatedDays[index].isChecked = !updatedDays[index].isChecked;
    setDays(updatedDays);
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

  // handle input from start time and time for slots creation
  const handleInputChange = (
    dayIndex: number,
    inputIndex: number,
    field: "start" | "end",
    value: string
  ) => {
   
    const updatedDays = [...days];
    updatedDays[dayIndex].inputs[inputIndex][field] = value;
    setDays(updatedDays);
    const currentInput = updatedDays[dayIndex].inputs[inputIndex];
    const currentStart = convertTo24Hour(currentInput.start);
    const currentEnd = convertTo24Hour(currentInput.end);
    const timePattern = /^([1-9]|1[0-2]):[0-5][0-9](am|pm)$/i

    const errorFeild = updatedDays[dayIndex].errors[inputIndex];

    if (!timePattern.test(currentInput.start)) {
      errorFeild["start"] = "Please Enter Correct Input ";
    }
    if(!timePattern.test(currentInput.end)){
      errorFeild["end"] = "Please Enter Correct Input ";
    }
    if (inputIndex > 0) {
      var previousInput = updatedDays[dayIndex].inputs[inputIndex - 1];
      var previusEnd = convertTo24Hour(previousInput?.end);
      currentInput[field] = value;

      if (
        field === "start" &&
        previusEnd &&
        (currentStart < previusEnd || currentStart >= currentEnd)
      ) {
        errorFeild[field] = "Time Scheduling Mismatch";
        errorFeild["end"]=""
      } else if (field === "end" && currentEnd <= currentStart) {
        const errorFeild = updatedDays[dayIndex].errors[inputIndex];
        errorFeild[field] = "Time Scheduling Mismatch";
        errorFeild["start"]=""
      } else {
        const errorFeild = updatedDays[dayIndex].errors[inputIndex];
        errorFeild[field] = "";
      }
    } else {
      currentInput[field] = value;

      if (field === "start" && currentStart >= currentEnd) {
        const errorFeild = updatedDays[dayIndex].errors[inputIndex];
        errorFeild[field] = "Time Scheduling Mismatch ";
        errorFeild["end"]=""
      } else if (field === "end" && currentEnd <= currentStart) {
        const errorFeild = updatedDays[dayIndex].errors[inputIndex];
        errorFeild[field] = "Time Scheduling Mismatch";
        errorFeild["start"]=""
      } else {
        const errorFeild = updatedDays[dayIndex].errors[inputIndex];
        errorFeild[field] = "";
      }
    }
    setDays(updatedDays);
  };

  // when click on plus symbol handle add inputs
  const handleAddInput = (dayIndex: number) => {
    const updatedDays = [...days];
    updatedDays[dayIndex].inputs.push({ start: "9:00am", end: "5:00pm" });
    updatedDays[dayIndex].errors.push({ start: "", end: "" });

    setDays(updatedDays);
  };

  // when click on remove symbol handle remove inputs
  const handleRemoveInput = (dayIndex: number, inputIndex: number) => {
    if (inputIndex === 0) {
      handleCheckboxChange(dayIndex);
    }
    const updatedDays = [...days];
    updatedDays[dayIndex].inputs.splice(inputIndex, 1);
    updatedDays[dayIndex].errors.splice(inputIndex, 1);
    setDays(updatedDays);
  };

  const displayMode = useBreakpointValue({ base: "block", md: "flex" });

  return (
    <div>
      {days.map((day, dayIndex) => (
        <Box key={day.name}>
          <Box display={displayMode}  justifyContent="space-between" w="100%">
            <Flex w="60%">
              <Box mt="12px">
                <Checkbox
                  isChecked={day.isChecked}
                  onChange={() => handleCheckboxChange(dayIndex)}
                />
              </Box>
              <Box w={DayboxWidth} className="checkbox-label">
                <FormLabel mt="8px" ml="10px">
                  {day.name}
                </FormLabel>
              </Box>
            </Flex>
            {day.isChecked ? (
              <Box className="input-group">
                {day.inputs.map((input, inputIndex) => (
                  <Flex key={inputIndex}>
                    <Box>
                      <Input
                        mt="5px"
                        w={["100%", "100%"]}
                        value={input.start}
                        onChange={(e) =>
                          handleInputChange(
                            dayIndex,
                            inputIndex,
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
                        {days[dayIndex].errors[inputIndex].start}
                      </Text>
                    </Box>
                    <Box mt="7px" ml="10px" mr="10px">
                      -
                    </Box>
                    <Box>
                      <Input
                        mt="5px"
                        w={["100%", "100%"]}
                        value={input.end}
                        onChange={(e) =>
                          handleInputChange(
                            dayIndex,
                            inputIndex,
                            "end",
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
                        {days[dayIndex].errors[inputIndex].end}
                      </Text>
                    </Box>

                    <Box
                      ml={["0", "10px"]}
                      mt={["5px", "0"]}
                      className="remove-button"
                      cursor="pointer"
                    >
                      {" "}
                      <Button
                        variant="unstyled"
                        onClick={() => handleRemoveInput(dayIndex, inputIndex)}
                      >
                        <i className="fa-solid fa-trash-can"></i>{" "}
                      </Button>
                    </Box>
                  </Flex>
                ))}
              </Box>
            ) : (
              <Box mr="20%" mt="8px">
                Unavailable
              </Box>
            )}
            <Button variant="unstyled">
              <i
                className="fa-solid fa-plus"
                onClick={() => handleAddInput(dayIndex)}
              ></i>
            </Button>
          </Box>

          <Divider mt="10px" mb="10px" />
        </Box>
      ))}
    </div>
  );
};

export default DayAvailability;
