import Navbar from "../../../Components/Navbar/Navbar";
import React from "react";
import DashboardNavbar from "../AdminDashBoard/DashboardNavbar";
import { Box, Button, Divider, Flex, FormLabel, Input, Select, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import BulkStudentsUpload from "./BulkStudentsUpload";

const AddStudents = () => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");


  return (
    <div className="container">
      <Navbar />
      <DashboardNavbar />
      <Box
        w="80%"
        ml="10%"
        mt="60px"
        minH="200px"
        h="auto"
        p="5%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <Stack direction={isSmallerThan600 ? "column" : "row"} spacing={8}>
          <Box w="50%" p="20px">
            <FormLabel>Add Student</FormLabel>
            <Divider />
            <Box>
              <FormLabel mt="10px" color="rgb(75 85 99)">
                Student Name{" "}
              </FormLabel>

              <Input
                width={isSmallerThan600 ? "80%" : "100%"}
                name="meetingLink"
                placeholder="Student Name"
              />
            </Box>

            <Box>
              <FormLabel mt="10px" color="rgb(75 85 99)">
               Batch{" "}
              </FormLabel>

              <Select
                width={isSmallerThan600 ? "80%" : "100%"}
                name="meetingLink"
                placeholder="Batch"
              >
               <option></option>
               <option></option>
               <option></option>
               <option></option>
              </Select>
            </Box>
            <Box>
              <FormLabel mt="10px" color="rgb(75 85 99)">
                Email{" "}
              </FormLabel>

              <Input
                width={isSmallerThan600 ? "80%" : "100%"}
                name="meetingLink"
                placeholder="Email"
              />
            </Box>

            <Flex mt="20px" justifyContent="flex-end">
              <Button colorScheme="blue" _hover={{ cursor: "pointer" }}>
                Add Student
              </Button>
            </Flex>
          </Box>
            <BulkStudentsUpload/>
        </Stack>
      </Box>
    </div>
  );
};

export default AddStudents;
