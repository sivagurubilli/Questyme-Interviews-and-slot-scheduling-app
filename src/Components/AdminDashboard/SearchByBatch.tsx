import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, Flex, FormLabel, Text, useToast } from "@chakra-ui/react";

import { useSearch } from "../../utils/SetParams";
import SearchComponent from "../SearchComponents/SearchComponent";
import { CountByBatchStatusService } from "../../Services/AdminSideServices/GetEventsService";

const SearchByBatch = ({ batchName, setBatchName }: any) => {
  const [totalInterviews, setTotalInterviews] = useState({
    totalInterviews: 0,
    results: [
      {
        meetingStatus: "",
        count: 0,
        batch:""
      },
      {
        meetingStatus: "",
        count: 0,
        batch:""
      },
    ],
  });
  const [search, updateSearch] = useSearch();
  const [loading,setLoading] = useState(false);

  const toast = useToast();


  const GetBatchStatus = useCallback(async () => {
    if (batchName !== "") {
      setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },1000)

      try {
        const response = await CountByBatchStatusService(batchName);

        if (response.results) {
          setTotalInterviews(response)
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
              name="batch"
            />{" "}
            <Button isLoading={loading} colorScheme="blue" mt="10px" onClick={GetBatchStatus}>
              Search
            </Button>{" "}
          </Flex>
          <FormLabel mt="10px">Total Interviews In Particular Batch</FormLabel>
          <Box w="100%" >
          <Flex justifyContent="space-between">
          <Text>Total Interviews </Text> <Text>{totalInterviews?.totalInterviews}</Text>
  </Flex>

  { totalInterviews?.results && batchName && totalInterviews?.results?.map((el:any) => (
    el.meetingStatus === "E" ? (
     
      <Flex justifyContent="space-between">
        <Text>Interviews Completed </Text> <Text>{el.count}</Text>
      </Flex>
    ) : (
      <Flex justifyContent="space-between">
        <Text>Interviews Pending </Text> <Text>{el.count}</Text>
      </Flex>
    )
  ))}

</Box>
        </Box>
      </Box>
    </div>
  );
};

export default SearchByBatch;
