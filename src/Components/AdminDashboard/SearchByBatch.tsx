import React from 'react'
import {
    Box,
    Button,
    Divider,
    Flex,
    FormLabel,
    Grid,
    SkeletonCircle,
    SkeletonText,
    Text,
    useToast,
  } from "@chakra-ui/react";

import { useSearch } from '../../utils/SetParams';
import SearchComponent from '../SearchComponent';


const SearchByBatch = () => {
  const [search, updateSearch] = useSearch();



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
    
        <Box w="60%" ml="20%" >
          <FormLabel >Search By Batch</FormLabel>
        <SearchComponent search={search} updateSearch={updateSearch} />
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
  )
}

export default SearchByBatch