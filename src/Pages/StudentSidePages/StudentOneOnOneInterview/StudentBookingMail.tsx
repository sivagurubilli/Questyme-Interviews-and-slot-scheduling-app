import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  VStack,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsClockFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { FormValues } from './../../../Services/UserSideServices/SlotBookingInterface';
import { BookSlot } from "../../../Services/UserSideServices/SlotBookingServices";

const initialFormValues: FormValues = {
  description: "",
};

const StudentBookingMail = () => {
  const location = useLocation();
  const [slotName2, setSlotName2] = useState<string | null>("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const slotNameParam = searchParams.get("slotName");
    if (slotNameParam) {
      setSlotName2(slotNameParam);
    }
  }, [location.search]);

  const toast = useToast();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormValues(initialFormValues);
    try {
      await BookSlot(formValues);
      toast({
        title: "Event scheduled",
        description: "Your event has been scheduled successfully!",
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
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
  
  return (
    <Box bg="#f3f4f6">
      <Flex
        direction={["column", "row"]}
        justifyContent="center"
        bg="white"
        m={["20px", "100px"]}
        p={["10px", "20px"]}
        flexWrap={["wrap", "nowrap"]}
      >
        <Box width={["100%", "50%"]}>
          <Button
            w="25px"
            h="40px"
            borderRadius="50%"
            colorScheme="blue"
            onClick={() => navigate(-1)}
            leftIcon={<BiArrowBack color="blue" size={30} />}
            bg="white"
            border="1px solid black"
            _hover={{
              bg: "blue.100",
              color: "white",
              border: "1px solid blue.600",
            }}
            _active={{
              bg: "blue.100",
              color: "white",
              border: "1px solid blue.700",
            }}
          />
          <Text>Pintu Gouda</Text>
          <Heading as="h4" size="md">
            Counselling session
          </Heading>
          <Flex>
            <Box mt="5px" mr="5px">
              {<BsClockFill />}{" "}
            </Box>
            {slotName2 ? <Box>{slotName2}</Box>:<Box>empty</Box> } 
          </Flex>
          <Flex>
            <Box mt="5px" mr="5px">
              {<BsFillCameraVideoFill />}{" "}
            </Box>
            <Box>Web conferencing details provided upon confirmation.</Box>
          </Flex>
          <Flex>
            <Box mt="5px" mr="5px">
              {<BsGlobeCentralSouthAsia />}{" "}
            </Box>
            <Box>Indian Standard Time</Box>
          </Flex>
        </Box>
        <Box width={["100%", "50%", "50%"]}>
          <Heading as="h4" size="md">
            Enter Details
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="description">
                <FormLabel>
                  Please share anything that will help prepare for our meeting.
                </FormLabel>
                <Textarea
                  name="description"
                  value={formValues.description}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                borderRadius="15px"
                alignSelf={["center", "flex-start"]}
              >
                Schedule Event
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default StudentBookingMail;
