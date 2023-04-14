import React, { useState } from 'react'
import {Box,InputGroup,InputLeftElement,Input} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
const SearchByTitle = () => {
    const [searchTerm,setSearchTerm] =useState<string>("")
  return (
    <div>
      <Box mt="10px" mb="10px">
      <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='tel'  placeholder="search"  />
  </InputGroup>
      </Box>
    </div>
  );
}

export default SearchByTitle
