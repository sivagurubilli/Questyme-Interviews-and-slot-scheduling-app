import React, { useState } from "react";
import { Box, Button, Flex, FormLabel, Textarea } from "@chakra-ui/react";
const TextArea = () => {
  const [value, setValue] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isBullet, setBullet] = useState(false);
  const [isList, setList] = useState(false);
  const [link, setLink] = useState(false);

console.log(value)

  return (
    <div>
      <FormLabel mt="20px" color="rgb(75 85 99)">
        Description/Instructions
      </FormLabel>
      <Box border="1px solid rgb(75 85 99)" w="40%" borderRadius="10px">
        <Flex p="10px">
          <Button
            bg={isBold ? "grey" : ""}
            variant="unstyled"
            onClick={() => setIsBold(!isBold)}
          >
            <i className="fa-solid fa-bold"></i>
          </Button>
          <Button
            ml="5px"
            bg={isItalic ? "grey" : ""}
            variant="unstyled"
            onClick={() => setIsItalic(!isItalic)}
          >
            <i className="fa-solid fa-italic"></i>
          </Button>
          <Button
            ml="5px"
            bg={isUnderline ? "grey" : ""}
            variant="unstyled"
            onClick={() => setIsUnderline(!isUnderline)}
          >
            <i className="fa-solid fa-underline"></i>
          </Button>
          <Button
            ml="5px"
            bg={isBullet ? "grey" : ""}
            variant="unstyled"
            onClick={() => setBullet(!isBullet)}
          >
            <i className="fa-solid fa-list-ol"></i>
          </Button>
          <Button
            ml="5px"
            bg={isList ? "grey" : ""}
            variant="unstyled"
            onClick={() => setList(!isList)}
          >
            <i className="fa-solid fa-list"></i>
          </Button>
          <Button
            ml="5px"
            bg={link ? "grey" : ""}
            variant="unstyled"
            onClick={() => setLink(!link)}
          >
            <i className="fa-solid fa-link"></i>
          </Button>
          <Button variant="unstyled">
            <i className="fa-solid fa-arrow-rotate-left"></i>
          </Button>
          <Button variant="unstyled">
            <i className="fa-solid fa-rotate-right"></i>
          </Button>
        </Flex>
        <Textarea
          fontWeight={isBold ? "bold" : "normal"}
          fontStyle={isItalic ? "italic" : "normal"}
          textDecoration={isUnderline ? "underline" : "none"}
          onChange={(event) => setValue(event.target.value)}
          ml="5%"
          variant="unstyled"
          w="90%"
          minH="300px"
        />
      </Box>
    </div>
  );
};

export default TextArea;
