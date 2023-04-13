import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
  Flex,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { MdSettings } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { BiEdit, BiNote, BiTrash } from "react-icons/bi";
import { FaRegClone } from "react-icons/fa";
import Header from "../../Components/CommonComponents/Header";
import { GetAllScheduledInterView } from "../../Services/UserSideServices/GetAllScheduledInterviewServices/GetInterviewsServices";
import { convertTimeFormat } from "../../utils/index";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Dispatch } from "redux";
import { scheduledInterviewFailure, scheduledInterviewLoading, scheduledInterviewSuccess } from "@/Redux/ScheduledInterviewUser/Action";
import SearchByTitle from "../../Components/SearchComponents/SearchByTitle";

export interface interview {
  interviewId: number;
  interviewerName: string;
  intervieweeName: string;
  startTime: string;
  endTime: string;
  date: string;
  category: string;
  instructions: string;
  title: string;
  meetingLink: string;
  batch: string;
  meetingStatus: string;
  studentNote: string;
  adminFeedback: string;
}
const UserDashboard = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const interviews = useSelector(
    (state: RootState) => state.ScheduledInterviewReducer.interviews
  );
  const [copyText, setCopyText] = useState("");
  const dispatch: Dispatch<
    | scheduledInterviewSuccess
    | scheduledInterviewLoading
    | scheduledInterviewFailure
  > = useDispatch();
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const userId: number = userDetails?.user?.id;
  const token: string = userDetails?.token;
  
  useEffect(() => {
    if (userId && interviews?.length === 0) {
      GetAllScheduledInterView(userId,token)(dispatch);
    }
  }, [dispatch, interviews?.length]);

  return (
    <div>
      <Navbar />
      <Header title={"Upcoming Events"} buttonName={"+ Book 1-1"} />
      <main>
        <Box bg={"#fafafa"}>
          <Box h={"100vh"} w={"75%"} margin={"auto"} pt={"20px"}>
            <SearchByTitle />
            <Box
              w={"100%"}
              h={"90%"}
              m={"auto"}
              borderTop={"1px solid gray"}
              pt={"20px"}
              mt={"5px"}
            >
              {/* grid layout of scheduled interview */}
              <Grid templateColumns={"repeat(3,1fr)"} gap={6}>
                {interviews.length > 0 &&
                  interviews.map((item: interview) => {
                    return (
                      <GridItem
                        key={item.interviewId}
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
                            <Box  w={"100%"}>
                              <Text
                                fontSize={"18px"}
                                fontWeight={"500"}
                                ml={"15px"}
                                mt={"10px"}
                                maxW={"200px"}
                                isTruncated
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
                                <Text>Date</Text>
                                <Text>{item.date}</Text>
                              </Box>
                              <Box>
                                <Text>Start Time</Text>
                                <Text>{convertTimeFormat(item.startTime)}</Text>
                              </Box>
                            </Flex>
                            <Divider orientation="horizontal" mt={"10px"} />
                            <Flex
                              justifyContent={"space-between"}
                              mt={"10px"}
                              pr={"15px"}
                              pl={"15px"}
                            >
                              <Text>{item.interviewerName}</Text>
                              <Text>{item.category}</Text>
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
                        
                            </Box>
                            <Box>
                              <Link
                                to={`/dashboard/interview/${item.interviewId}`}
                              >
                                <Button
                                  variant={"link"}
                                  float={"right"}
                                  mt={"1px"}
                                  colorScheme="blue"
                                >
                                 View Details &gt;
                                </Button>
                              </Link>
                            </Box>
                          </Flex>
                        </Box>
                      </GridItem>
                    );
                  })}
              </Grid>
            </Box>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default UserDashboard;
