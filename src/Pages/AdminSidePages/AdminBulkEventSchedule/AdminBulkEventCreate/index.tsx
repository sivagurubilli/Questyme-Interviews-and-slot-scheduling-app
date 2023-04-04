import React, { useState } from "react";
import { Box, Button, Divider, Flex, FormLabel } from "@chakra-ui/react";
import Navbar from '../../../../Components/Navbar/Navbar'
import BulkEventNav from "./BulkEventNav";
import { useDispatch } from "react-redux";
import { createBulkInterview } from "../../../../Redux/ScheduleBulkInterviewAdmin/ActionCreators";

const CreateBulkEvent = () => {
  const [file, setFile] = useState('');
  const dispatch = useDispatch();

  const handleOnchange = (e: any) => {
    const fileList = e.target.files;
    if (fileList) {
      setFile(fileList[0]);
      console.log(fileList);
    }
  }

  const handleCreateSchedule = () => {
    const formData = new FormData();
    formData.append("file", file);
    createBulkInterview(formData)(dispatch);
  }

  return (
    <div className="container">
      <Navbar />
      <BulkEventNav />
      <Box w="80%" ml="10%" mt="60px" minH="200px" h="auto" p="5%" bg="white" borderRadius="10px" boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)">
        <Box margin={"auto"} borderRadius={"10px"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" width={"50%"} p="20px">
          <FormLabel mt="10px" color="rgb(75 85 99)">Select CSV File</FormLabel>
          <input
            style={{ marginBottom: "20px", "fontWeight": "700" }}
            type="file"
            accept={".csv"}
            onChange={(e) => handleOnchange(e)}
          />
          <div style={{ "display": "Flex", "justifyContent": "space-between" }}>
            <Button colorScheme="blue" onClick={handleCreateSchedule}>Schedule Interview</Button>
            <Button colorScheme="blue">Download Template</Button>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default CreateBulkEvent;