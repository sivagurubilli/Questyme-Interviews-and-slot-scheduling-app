import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";

const SearchComponent = () => {
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
          ></Input>
        </Flex>
      </Box>
    </div>
  );
};

export default SearchComponent;
