import {
    Box,
    Button,
    Grid,
    GridItem,
    Input,
    Text,
    Flex,
    Divider,
    Stack,
  } from "@chakra-ui/react";
  import {
    SearchIcon,
    CloseIcon,
  } from "@chakra-ui/icons";
  import { interview } from "../UserDashboard/UserDashboard";
  import { Link } from "react-router-dom";
import Header from '../../Components/CommonComponents/Header'
import Navbar from '../../Components/Navbar/Navbar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { convertTimeFormat } from "../../utils/index";
import { Action } from "../../Redux/PastInterviewReducer/Action";
import { Dispatch } from "redux";
import { getAllPastInterviewService } from "../../Services/UserSideServices/GetAllPastInterviewServices/GetAllPastInterviewService";
import SearchComponent from "../../Components/SearchComponent";
const PastEvents = () => {
    const interviews = useSelector((state:RootState)=>state.PastInterViewReducer.interviews)
    const dispatch:Dispatch<Action> =useDispatch();

    useEffect(()=>{
        getAllPastInterviewService()(dispatch)
    },[])

    console.log("djkdhkd",interviews)
    return (
    <div>
      <Navbar />
      <Header title={"Past Events"} buttonName ={"Back"} />
      <main>
        <Box bg={"#fafafa"}>
          <Box h={"100vh"} w={"75%"} margin={"auto"} pt={"20px"}>
            <SearchComponent />
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
                              <Link to={`/dashboard/interview/${item.interviewId}`}>
                                <Button
                                  variant={"link"}
                                  float={"right"}
                                  mt={"1px"}
                                >
                                  Details &gt;
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
  )
}

export default PastEvents
