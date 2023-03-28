import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi'
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BsClockFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";


interface FormValues {
  name: string;
  email: string;
  description: string;
}

const initialFormValues: FormValues = {
  name: "",
  email: "",
  description: "",
};

const StudentBookingMail = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues(initialFormValues);
  };
  return (
    <Box bg='#f3f4f6'>
      <Flex
        direction={['column', 'row']}
        justifyContent="center"
        bg='white'
        m={['20px', '100px']}
        p={['10px', '20px']}
        flexWrap={['wrap', 'nowrap']}
      >
        <Box width={['100%', '50%']}>
          <Button
            w='25px'
            h='40px'
            borderRadius="50%"
            colorScheme="blue"
            onClick={() => navigate(-1)}
            leftIcon={<BiArrowBack color="blue" size={30} />}
            bg="white"
            border="1px solid black"
            _hover={{
              bg: "blue.100",
              color: "white",
              border: "1px solid blue.600"
            }}
            _active={{
              bg: "blue.100",
              color: "white",
              border: "1px solid blue.700"
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
            <Box>15 mins</Box>
          </Flex>
          <Flex>
            <Box mt="5px" mr="5px">
              {<BsFillCameraVideoFill />}{" "}
            </Box>
            <Box>
              Web conferencing details provided upon confirmation.
            </Box>
          </Flex>
        </Box>
        <Box width={['100%', '50%', '50%']}>
          <Heading as="h4" size="md">
            Enter Details
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
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
                alignSelf={['center', 'flex-start']}
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
