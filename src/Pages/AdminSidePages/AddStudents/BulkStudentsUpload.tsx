
import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Stack,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AddBulkStudentService } from "../../../Services/AdminSideServices/GetEventsService";
import { token} from "../../../Assets/Assets";

const BulkStudentsUpload = () => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const toast = useToast();

  
  function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/csv') {
      setCsvFile(file);
    } else {
      setCsvFile(null);
    }
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!csvFile) return;
    const formData = new FormData();
    formData.append('file', csvFile);
    
    try {
      const response = await AddBulkStudentService(formData, token);
      if (response.message) {
        toast({
          title: "Students details added successfully",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

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
  const createCsvData = (students: any): string => {
    const headers = [ "name", "email", "password","batch"];
    const rows = students.map(({ name, email, password,batch }: any) => [
      name,
      email,
      password,
      batch
    ]);
    return [headers, ...rows].map((row) => row.join(",")).join("\n");
  };
  const students = [
    {
      name: "ravi",
      email: "john.doe@example.com",
      password: "1453673",
      batch:"rct201"
    },
  ];

 

  return (
    <div>
      <Box p="20px" w="100%">
        <FormLabel>Add Students In Bulk</FormLabel>
        <Divider />
        <Stack direction="row" mt="30px" alignItems="center">
          <Text>Download Template For Adding Students In Bulk</Text>
          <Button
            colorScheme="blue"
            fontSize={isSmallerThan600 ? "12px" : "auto"}
            ml="20px"
            onClick={() => downloadCsv(createCsvData(students))}
          >
            Download
          </Button>
        </Stack>
        
        <form onSubmit={handleFormSubmit}>
        <Flex justifyContent="space-between" w="90%" mt="30%">
        <input type="file" accept=".csv" onChange={handleFileInputChange} />
        <Button colorScheme="blue" type="submit">Upload</Button>
        </Flex>
      </form>
       
      </Box>
    </div>
  );
};

export default BulkStudentsUpload;
