
import { RootState } from "../../../Redux/store";
import { AddBulkStudentService } from "../../../Services/AdminSideServices/GetEventsService";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Input,
  Stack,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const BulkStudentsUpload = () => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const [file, setFile] = useState<File | undefined>(undefined);
  const state = useSelector((state:RootState)=>state.AuthReducer)
  const token = state.token
const toast = useToast()

  const handleCreateBulkLecture = async() => {
    const formData = new FormData();
    
    if(file){
      formData.append("file", file);

    }
    try{
     const response = await AddBulkStudentService(formData,token)
     if(response){
      toast({
        title: "Students details added successfully",
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
     }
    }catch(error){
      toast({
        title: "Something Went Wrong",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
   
}
  // Down load csv file
  const downloadCsv = (csvData: string) => {
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "students.csv");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // creating csv file
  const createCsvData = (students:any): string => {
    const headers = ["name", "email","password", "Batch"];
    const rows = students.map(({ name, email, batch,password }: any) => [
     name,
      email,
      batch,
      password
    ]);
    return [headers, ...rows].map((row) => row.join(",")).join("\n");
  };
  const students = [
    { name: "ravi", email: "john.doe@example.com", batch: "fw15",password:"1222222222222" },

  ];
  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const uploadedFile = event.target.files?.[0]; // get the first file from the selected files
    if (uploadedFile) {
      setFile(uploadedFile); // set the state to the uploaded file
    }
  }
  

  return (
    <div>
      <Box p="20px" w="100%">
        <FormLabel>Add Students In Bulk</FormLabel>
        <Divider />
        <Stack direction="row" mt="30px" alignItems="center">
          <Text>Download Template For Adding Students In Bulk</Text>
          <Button
            colorScheme="blue"
            ml="20px"
            onClick={() => downloadCsv(createCsvData(students))}
          >
            Download
          </Button>
        </Stack>
        <Flex justifyContent="space-between" w="90%" mt="30%">
          <Input type="file" w="50%" accept={".csv"} onChange={handleFileUpload}/>
          <Button colorScheme="blue"  onClick={handleCreateBulkLecture}  >Add Students</Button>
        </Flex>
      </Box>
    </div>
  );
};

export default BulkStudentsUpload;
