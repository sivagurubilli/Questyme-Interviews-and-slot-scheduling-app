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
  Select,
} from "@chakra-ui/react";
import {
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useDisclosure
} from "@chakra-ui/react";
import {
  SearchIcon,
  CloseIcon,
  InfoOutlineIcon,
  CopyIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@chakra-ui/icons";
import { MdSettings } from "react-icons/md";
import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import {BiEdit,BiNote,BiTrash} from "react-icons/bi";
import { FaRegClone} from "react-icons/fa";
import Header from "../../Components/CommonComponents/Header";

const UserDashboard = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <div>
      <Navbar />
     <Header title={"today's Bookings"} buttonName={"+ Book 1-1"}/>
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
                  <Box>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box>
                        <Text
                          fontSize={"18px"}
                          fontWeight={"500"}
                          ml={"15px"}
                          mt={"10px"}
                        >
                          Title
                        </Text>
                      </Box>
                      <Box>
                        <Flex
                          mt={"10px"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Box
                            display={"flex"}
                            justifyItems={"space-around"}
                            alignItems={"center"}
                          >
                            <Popover 
                             isOpen={isOpen}
                             onOpen={onOpen}
                             onClose={onClose}
                           
                            >
                              <PopoverTrigger>
                               <Box display={"flex"} p={"5px"} borderRadius={"5px"} mr={"15px"} border={"1px solid indigo"} justifyContent={"space-around"} alignItems={"center"}>
                               <MdSettings
                                  size={"20px"}
                                  
                                />{isOpen?<ChevronUpIcon w={"20px"} h={"20px"} />:<ChevronDownIcon w={"20px"} h={"20px"}/>}
                               </Box>
                              </PopoverTrigger>
                              <Portal  >
                                <PopoverContent w={"150px"} mr={"100px"} >
                                  <PopoverBody  >
                                    <Flex  alignContent={"center"} pt={"10px"} pb={"10px"}>
                                    <BiEdit size={"20px"} /> <Link to={"#"}><Text ml={"6px"} mt={"-2px"}>Edit</Text></Link>
                                    </Flex>
                                    <Flex  alignContent={"center"} pt={"10px"} pb={"10px"}>
                                    <BiNote size={"20px"} /> <Link to={"#"}><Text ml={"6px"} mt={"-2px"}>Add Notes</Text></Link>
                                    </Flex>
                                    <Flex  alignContent={"center"} pt={"10px"} pb={"10px"}>
                                    <FaRegClone size={"16px"} /> <Link to={"#"}><Text ml={"6px"} mt={"-4px"}>Copy</Text></Link>
                                    </Flex>
                                    <Flex  alignContent={"center"} pt={"10px"} pb={"10px"} >
                                    <BiTrash size={"20px"} /> <Link to={"#"}><Text ml={"6px"} mt={"-2px"}>Delete</Text></Link>
                                    </Flex>
                                    
                                  </PopoverBody>
                                </PopoverContent>
                              </Portal>
                            </Popover>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                    <Stack>
                      <Flex
                        justifyContent={"space-between"}
                        mt={"10px"}
                        pl={"15px"}
                        pr={"15px"}
                      >
                        <Text>StartTime</Text>
                        <Text>EndTime</Text>
                      </Flex>
                      <Divider orientation="horizontal" mt={"10px"} />
                      <Flex
                        justifyContent={"space-between"}
                        mt={"10px"}
                        pr={"15px"}
                        pl={"15px"}
                      >
                        <Text>InterViewer</Text>
                        <Text>Type</Text>
                      </Flex>
                    </Stack>
                    <Flex
                      justifyContent={"space-between"}
                      borderTop={"1px solid gray"}
                      alignItems={"center"}
                      mt={"20px"}
                      w={"100%"}
                      p={"10px"}
                    >
                      <Box>
                        <Flex
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <CopyIcon w={"20px"} h={"20px"} />
                          <Text ml={"10px"}>Copy Link</Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Link to={"/user/me/interview-details"}><Button variant={"link"} float={"right"} mt={"10px"}>
                          Details &gt;
                        </Button></Link>
                      </Box>
                    </Flex>
                  </Box>
                </GridItem>
                
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box w={"100%"} bg={"blue"}>
          <Box
            w={"75%"}
            height={"70px"}
            m={"auto"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"flex"}>
              <InfoOutlineIcon
                w={"25px"}
                h={"25px"}
                color={"white"}
                fontWeight={"500"}
              />
              <Text
                color={"white"}
                fontSize={"20px"}
                mt={"-2px"}
                ml={"10px"}
                fontWeight={"500"}
              >
                You Have Notifications
              </Text>
            </Box>
            <Box>
              <Button bg={"white"} color={"black"}>
                View
              </Button>
            </Box>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default UserDashboard;
