import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const InterviewCreateNav = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Box position="relative" h="auto" marginTop="2px" bg="whiteAlpha.900" w="100%">
                <Box boxShadow="sm">
                    <Flex position={"relative"} w={"100%"} align="center" m="auto" h={"60px"} justifyContent={"space-around"} color={"gray.600"}>
                        <Button colorScheme="blue" onClick={() => navigate(-1)}>
                            Back
                        </Button>
                        <Text fontWeight="bold" position={"relative"} fontSize="medium">
                            Create Single Interview
                        </Text>  
                    </Flex>
                </Box>
            </Box>
        </div>
    );
};

export default InterviewCreateNav;
