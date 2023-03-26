import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Input,
    Text,
    Flex,
    Divider,
    Stack,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import React from "react";
import Navbar from "../Navbar/Navbar";

const UserDashboard = () => {
    return (
        <div>
            <Navbar />
            <header>
                <Box bg={"white"}>
                    <Box w={"75%"} h={"auto"} m={"auto"}>
                        <Box
                            w={"100%"}
                            h={"70px"}
                            m={"auto"}
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Text
                                fontSize={"1.7rem"}
                                fontWeight={"500"}
                                fontFamily={"sans-serif"}
                            >
                                My Interviews
                            </Text>
                            <Button colorScheme="blue">+ Book Interview</Button>
                        </Box>
                        {/* <Box border={"1px solid indigo"} w={"100%"} h={"60px"} m={"auto"}></Box> */}
                    </Box>
                </Box>
            </header>
            <main>
            <Box bg={"#fafafa"}>
                <Box h={"100vh"} w={"75%"} margin={"auto"} pt={"20px"}>
                    <Box
                        display={"flex"}
                        w={"50%"}
                        h={"25px"}
                        textAlign={"center"}
                        pl={"10px"}
                    >
                        <SearchIcon h={"20px"} w={"20px"} mt={"10px"} color={"gray"} />
                        <Input
                            type="text"
                            placeholder="Filter..."
                            variant="unstyled"
                            border={"none"}
                            size={"md"}
                            outline={"none"}
                            mt={"10px"}
                            ml={"10px"}
                            fontSize={"18px"}
                        />
                        <CloseIcon h={"15px"} w={"15px"} mt={"10px"} color={"gray"} />
                    </Box>
                    <Box
                        w={"100%"}
                        h={"90%"}
                        m={"auto"}
                        borderTop={"1px solid gray"}
                        p={"5px"}
                        pt={"20px"}
                        mt={"20px"}
                    >
                        {/* grid layout of scheduled interview */}
                        <Grid templateColumns={"repeat(3,1fr)"} gap={6}>
                            <GridItem
                                w={"100%"}
                                h={"200px"}
                                border={" 1px solid indigo"}
                                bg={"white"}
                                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                                borderRadius={"10px"}
                                cursor={"pointer"}
                            >
                                <Box p={"20px"}>
                                    <Text fontSize={"18px"} fontWeight={"500"}>
                                        Title
                                    </Text>
                                    <Stack>
                                        <Flex justifyContent={"space-between"}>
                                            <Text>StartTime</Text>
                                            <Text>EndTime</Text>
                                        </Flex>
                                        <Divider orientation="horizontal" mt={"8px"} />
                                        <Flex justifyContent={"space-between"} mt={"10px"}>
                                            <Text>InterViewer</Text>
                                            <Text>Type</Text>
                                        </Flex>
                                        <Divider orientation="horizontal" mt={"8px"} />
                                    </Stack>
                                    <Button variant={"link"} float={"right"} mt={"10px"}>
                                        Details &gt;
                                    </Button>
                                </Box>
                            </GridItem>
                            <GridItem
                                w={"100%"}
                                h={"200px"}
                                border={"1px solid indigo"}
                                borderRadius={"10px"}
                                cursor={"pointer"}
                                bg={"white"}
                                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                            />
                            <GridItem
                                w={"100%"}
                                h={"200px"}
                                border={"1px solid indigo"}
                                borderRadius={"10px"}
                                cursor={"pointer"}
                                bg={"white"}
                                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                            />
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Box 
            w={"100%"}
            bg={"blue"}
            >
                <Box
                w={"75%"}
                height={"70px"}
                m={"auto"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                >
                    <Box
                    display={"flex"}
                    >
                        <InfoOutlineIcon w={"25px"} h={"25px"} color={"white"} fontWeight={"500"}/>
                        <Text color={"white"} fontSize={"20px"} mt={"-2px"} ml={"10px"} fontWeight={"500"}>You Have Notifications</Text>
                    </Box>
                    <Box>
                        <Button bg={"white"} color={"black"}>View</Button>
                    </Box>
                </Box>
            </Box>
            </main>

        </div>
    );
};

export default UserDashboard;
