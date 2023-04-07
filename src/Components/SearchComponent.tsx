import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const SearchComponent = ({search,updateSearch}:any) => {
  const [searchTerm, setSearchTerm] = useState("");




  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  
    updateSearch({
      ...search,
    "name":event.target.value
    });
   
  };

 
  return (
    <div>
      <Box mt="10px" mb="10px">
      <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Search' onChange={handleInputChange} />
  </InputGroup>
      </Box>
    </div>
  );
};

export default SearchComponent;
