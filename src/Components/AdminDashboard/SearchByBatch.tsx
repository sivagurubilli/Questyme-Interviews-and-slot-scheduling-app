import React, { useCallback, useState } from "react";
import { Box, Button, Flex, FormLabel, Text, useToast } from "@chakra-ui/react";

import { useSearch } from "../../utils/SetParams";
import SearchComponent from "../SearchComponent";
import { CountByBatchStatusService } from "../../Services/AdminSideServices/GetEventsService";

const SearchByBatch = ({ batchName, setBatchName }: any) => {
  const [totalIntervies, setTotalInterviews] = useState({
    totalIntervies: "",
    results: [
      {
        meetingStatus: "",
        count: 0,
      },
      {
        meetingStatus: "",
        count: 0,
      },
    ],
  });
  const [search, updateSearch] = useSearch();
  const toast = useToast();

  const GetBatchStatus = useCallback(async () => {
    if (batchName !== "") {
      try {
        const response = await CountByBatchStatusService(batchName);

        if (response.length > 1) {
        }
      } catch (err) {
        toast({
          title: "Something Went Wrong",
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      }
    }
  }, [toast, batchName]);

  return (
    <div>
      <Box
        w="80%"
        ml="10%"
        mt="30px"
        minH="200px"
        h="auto"
        p="2%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <Box w="60%" ml="20%">
          <FormLabel>Search By Batch</FormLabel>
          <Flex w="100%" justifyContent="space-between">
            <SearchComponent
              search={search}
              updateSearch={updateSearch}
              value={batchName}
            />{" "}
            <Button colorScheme="blue" mt="10px" onClick={GetBatchStatus}>
              Search
            </Button>{" "}
          </Flex>
          <FormLabel mt="10px">Total Interviews In Particular Batch</FormLabel>
          <Flex justifyContent="space-between">
            <Text>Total Interviews </Text> <Text>0</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Interviews Completed </Text> <Text>0</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Interviews Pending </Text> <Text>0</Text>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default SearchByBatch;
