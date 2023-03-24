import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormLabel,
  Input,
} from "@chakra-ui/react";

//this component is for schedule slots based on availability setting of days
const DayAvailability = () => {
  // setting state for slots availability  for particular day
  const [days, setDays] = useState([
    { name: "Sun", isChecked: true, inputs: [{ start: "9:00am", end: "5:00pm" }] },
    { name: "Mon", isChecked: true, inputs:[{ start: "9:00am", end: "5:00pm" }] },
    { name: "Tue", isChecked: true, inputs: [{ start: "9:00am", end: "5:00pm" }]},
    { name: "Wed", isChecked: true, inputs: [{ start: "9:00am", end: "5:00pm" }]},
    { name: "Thu", isChecked: true, inputs: [{ start: "9:00am", end: "5:00pm" }]},
    { name: "Fri", isChecked: true, inputs: [{ start: "9:00am", end: "5:00pm" }]},
    { name: "Sat", isChecked: true, inputs: [{ start: "9:00am", end: "5:00pm" }]},
  ]);

  

  // handle checkbox value change on checked
  const handleCheckboxChange = (index: number) => {
    const updatedDays = [...days];
    updatedDays[index].isChecked = !updatedDays[index].isChecked;
    setDays(updatedDays);
  };

  // handle input from start time and time for slots creation 
  const handleInputChange = (
    dayIndex: number,
    inputIndex: number,
    field: "start" | "end" ,
    value: string
  ) => {
    const updatedDays = [...days];
    updatedDays[dayIndex].inputs[inputIndex][field] = value;
    setDays(updatedDays);
  };

  // when click on plus symbol handle add inputs 
  const handleAddInput = (dayIndex: number) => {
    const updatedDays = [...days];
    updatedDays[dayIndex].inputs.push({ start:"9:00am", end: "5:00pm" });
    setDays(updatedDays);
  };

   // when click on remove symbol handle remove inputs 
  const handleRemoveInput = (dayIndex: number, inputIndex: number) => {
 if(inputIndex===0 ){
    handleCheckboxChange(dayIndex)
 }
    const updatedDays = [...days];
    updatedDays[dayIndex].inputs.splice(inputIndex, 1);
    setDays(updatedDays);
  };

  return (
    <div>
      {days.map((day, dayIndex) => (
        <Box key={day.name}>
          <Flex justifyContent="space-between" w="100%">
            <Flex w="60%">
              <Box mt="12px">
                <Checkbox
                  isChecked={day.isChecked}
                  onChange={() => handleCheckboxChange(dayIndex)}
                />
              </Box>
              <Box w="70px">
                <FormLabel mt="8px" ml="10px">
                  {day.name}
                </FormLabel>
              </Box>
            </Flex>
            {day.isChecked ? (
              <Box>
                {day.inputs.map((input, inputIndex) => (
                  <Flex key={inputIndex}>
                    <Input
                      mt="5px"
                      w="30%"
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
                    <Box mt="7px" ml="10px" mr="10px">
                      -
                    </Box>

                    <Input
                      mt="5px"
                      w="30%"
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

                    <Box   ml="10px" cursor="pointer">
                      {" "}
                      <Button variant="unstyled"  onClick={() => handleRemoveInput(dayIndex, inputIndex)}>
                      <i
                        className="fa-solid fa-trash-can"
                        
                      ></i>{" "}
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
          </Flex>
          <Divider mt="10px" mb="10px" />
        </Box>
      ))}
    </div>
  );
};

export default DayAvailability;
