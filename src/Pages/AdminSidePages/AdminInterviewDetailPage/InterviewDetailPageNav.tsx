import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const DetailPageNav = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Box position="relative" h="auto" marginTop="2px" bg="whiteAlpha.900" w="100%">
                <Box boxShadow="sm">
                    <Flex position={"relative"} w={"97%"} align="center" m="auto" h={"60px"} justifyContent={"space-around"} color={"gray.600"}>
                        <Button colorScheme="blue" onClick={() => navigate(-1)}>
                            Back
                        </Button>
                        <Flex gap={"20px"}>
                            <Button colorScheme="blue" onClick={() => navigate(-1)}>
                                Update
                            </Button>
                            <Button colorScheme="blue" onClick={() => navigate(-1)}>
                                Delete
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </div>
    );
};

export default DetailPageNav;
