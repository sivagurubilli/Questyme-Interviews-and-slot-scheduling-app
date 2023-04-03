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
} from "@chakra-ui/react";
import React from "react";

const BulkStudentsUpload = () => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

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
  const createCsvData = (students: any): string => {
    const headers = ["Student Name", "Email", "Batch"];
    const rows = students.map(({ studentName, email, batch }: any) => [
      studentName,
      email,
      batch,
    ]);
    return [headers, ...rows].map((row) => row.join(",")).join("\n");
  };
  const students = [
    { studentName: "ravi", email: "john.doe@example.com", batch: "fw15" },
    { studentName: "mahi", email: "jane.smith@example.com", batch: "fw17" },
  ];

  return (
    <div>
      <Box p="20px" borderLeft={isSmallerThan600 ? "" : "1px solid"} w="100%">
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
          <Input type="file" w="50%" accept={".csv"} />
          <Button colorScheme="blue">Add Students</Button>
        </Flex>
      </Box>
    </div>
  );
};

export default BulkStudentsUpload;
