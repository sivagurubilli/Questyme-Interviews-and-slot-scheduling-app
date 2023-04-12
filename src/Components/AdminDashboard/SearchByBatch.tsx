import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, Flex, FormLabel, Text, useToast } from "@chakra-ui/react";

import { useSearch } from "../../utils/SetParams";
import SearchComponent from "../SearchComponents/SearchComponent";
import { CountByBatchStatusService } from "../../Services/AdminSideServices/GetEventsService";
import { batch } from "react-redux";
import { IntervieStatusByBatch } from "../../Assets/Assets";

const SearchByBatch = ({ batchName, setBatchName }: any) => {
  const [totalInterviews, setTotalInterviews] = useState(IntervieStatusByBatch);
  const [search, updateSearch] = useSearch();
  const [loading,setLoading] = useState(false);

  const toast = useToast();
  interface InterviewResult {
    meetingStatus: string;
    count: number;
  }
  
// if batchname then call the api to get details on batch
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
        <Flex justifyItems="center" mb="20px">
            <FormLabel fontSize="16px" style={{ margin: "0 auto" }}>
            The Status of Interviews in a Particular Batch
            </FormLabel>
            </Flex>
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
       
          <Box w="100%" >
        
        {batchName &&  <Flex justifyContent="space-between">
          <Text>Total Interviews </Text> <Text>{totalInterviews?.totalInterviews}</Text>
  </Flex>}
  <>
      {totalInterviews?.results?.map((el: InterviewResult) => (
        <Flex justifyContent="space-between" key={el.meetingStatus}>
          {el.meetingStatus === 'E' ? (
            <>
              <Text>Interviews Compleated</Text>
              <Text>{el.count}</Text>
            </>
          ) : null}
          {el.meetingStatus === 'P' ? (
            <>
              <Text>Interviews Pending</Text>
              <Text>{el.count}</Text>
            </>
          ) : null}
            {el.meetingStatus === 'C' ? (
            <>
              <Text>Interviews Cancelled</Text>
              <Text>{el.count}</Text>
            </>
          ) : null}
            {el.meetingStatus === 'S' ? (
            <>
              <Text>Interviews Started</Text>
              <Text>{el.count}</Text>
            </>
          ) : null}
            {el.meetingStatus === 'SS' ? (
            <>
              <Text>Interviews Started By Student</Text>
              <Text>{el.count}</Text>
            </>
          ) : null}
            {el.meetingStatus === 'IS' ? (
            <>
              <Text>Interviews Started By Interviewr</Text>
              <Text>{el.count}</Text>
            </>
          ) : null}
            {el.meetingStatus === 'SE' ? (
            <>
              <Text>Interviews Ended By Stuuent</Text>
              <Text>{el.count}</Text>
            </>
          ) : null}
            {el.meetingStatus === 'IE' ? (
            <>
              <Text>Interviews Ended By Interviewr</Text>
              <Text>{el.count}</Text>
            </>
          ) : null}
        </Flex>
      ))}
    </>

</Box>
        </Box>
      </Box>
    </div>
  );
};

export default SearchByBatch;
