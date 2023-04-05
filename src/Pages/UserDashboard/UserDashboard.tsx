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
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import {BiEdit,BiNote,BiTrash} from "react-icons/bi";
import { FaRegClone} from "react-icons/fa";
import Header from "../../Components/CommonComponents/Header";
import { GetAllInterviewService } from "../../Services/UserSideServices/GetInterviewsServices";
import {convertTimeFormat} from "../../utils/index"
export interface interview{
  interviewId: number,
  interviewerId: number,
  intervieweeId: number,
  startTime: string,
  endTime: string,
  date: string,
  studentsNotes: null,
  adminFeedback: null,
  category:string,
  instructions: string,
  title: string,
  meetingLink: string,
  meetingStatus: string,
  batch: string
}
const UserDashboard = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const [interviews,setInterviews] =useState([]);
    const [copyText,setCopyText] =useState("")
    useEffect(()=>{
      getInterviews();
    },[])

    const getInterviews = async()=>{
      try{
          const res = await GetAllInterviewService();
         if(res.length){
          setInterviews(res)
         }
      }catch(err){
          console.log(err)
      }
    }

    async function copyContent(text:string) {
      try {
        await navigator.clipboard.writeText(text);
        const res = navigator.clipboard.readText().then((response)=>{
            setCopyText(response)
        })

        
        /* Resolved - text copied to clipboard successfully */
      } catch (err) {
        console.error('Failed to copy: ', err);
        /* Rejected - text failed to copy to the clipboard */
      }
    }
    console.log("interviews",interviews)
    console.log("interviews",copyText)
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
                {interviews.length>0 && interviews.map((item:interview)=>{
                      return <GridItem
                      key = {item.interviewId}
                      w={"100%"}
                      h={"auto"}
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
                              {item.title}
                            </Text>
                          </Box>
                          
                        </Flex>
                        <Stack>
                          <Flex
                            justifyContent={"space-between"}
                            mt={"10px"}
                            pl={"15px"}
                            pr={"15px"}
                          >
                            <Box>
                              <Text>Start Time</Text>
                              <Text>{convertTimeFormat(item.startTime)}</Text>
                            </Box>
                            <Box>
                              <Text>Start Time</Text>
                              <Text>{convertTimeFormat(item.endTime)}</Text>
                            </Box>
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
                          mt={"10px"}
                          w={"100%"}
                          p={"10px"}
                        >
                          <Box>
                            <Flex
                              justifyContent={"space-between"}
                              alignItems={"center"}
                            >
                              {copyText && copyText==item.meetingLink?"":<CopyIcon w={"20px"} h={"20px"} />}
                              {copyText && copyText==item.meetingLink?<Text>Copied !</Text>:<Text ml={"10px"}  onClick={()=>copyContent(item.meetingLink)}>Copy Link</Text>}
                              
                            </Flex>
                          </Box>
                          <Box>
                            <Link to={"/dashboard/interview-details"}><Button variant={"link"} float={"right"} mt={"1px"}>
                              Details &gt;
                            </Button></Link>
                          </Box>
                        </Flex>
                      </Box>
                    </GridItem>
                })}
                
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
