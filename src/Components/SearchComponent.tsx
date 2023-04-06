import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const SearchComponent = ({  search,updateSearch}:any) => {
  const [searchTerm, setSearchTerm] = useState("");




  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  
    updateSearch({
      ...search,
      "name":event.target.value
    });
   
  };

 
  return (
    <div>
      <Box>
        <Flex mb="10px">
          <i
            style={{ padding: "10px", color: "#778087" }}
            className="fa-solid fa-magnifying-glass"
          ></i>
          <Input
            variant="unstyled"
            w="300px"
            placeholder="Filter Events By Title"
            onChange={handleInputChange}
          ></Input>
        </Flex>
      </Box>
    </div>
  );
};

export default SearchComponent;
