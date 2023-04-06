import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/CommonComponents/Header";
import React from "react";
import { Box, Flex, Switch, Text, Textarea } from "@chakra-ui/react";

const InterviewDetails = () => {
  return (
    <div>
      <Navbar />
      <Header title={"Details"} buttonName={"Back"} />
      <main>
        <Box bgColor={"#fafafa"} p={"20px"}>
          <Box  w={"75%"} m={"auto"} bg={"white"} mt={"20px"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Box h={"auto"} w={"45%"}  >
                <Box  w={"80%"} m={"auto"} h={"100%"}>
                  <Box
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Title
                    </Text>
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Interview Schedule Time
                    </Text>
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Duration of Interview
                    </Text>
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      color={"indigo"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                    >
                      Name of Interviewer
                    </Text>
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Is Interview Started
                    </Text>
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Is InterView Ended
                    </Text>
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"17%"}
                    p={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                   
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                      mt={"10px"}
                    >
                      Notes
                    </Text>
                  </Box>
                  <Box
                  
                    m={"auto"}
                    h={"10%"}
                    pt={"10px"}
                    textAlign={"left"}
                    pl={"20px"}
                    mt={"20px"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Link of Interview
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box h={"auto"} w={"45%"}  >
              <Box w={"80%"} m={"auto"} h={"100%"}>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"17px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Title
                    </Text>
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"15px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Interview Schedule Time
                    </Text>
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"15px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Duration of Interview
                    </Text>
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Text
                      fontSize={"15px"}
                      color={"indigo"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                    >
                      Name of Interviewer
                    </Text>
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Switch colorScheme="blue" size={"md"} />
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"12%"}
                    p={"10px"}
                    textAlign={"center"}
                    pl={"20px"}
                  >
                    <Switch colorScheme="blue" size={"md"} />
                  </Box>
                  <Box
                   
                    m={"auto"}
                    h={"17%"}
                    textAlign={"center"}
                    
                  >
                    <Textarea size={"xs"} />
                  </Box>
                  <Box
                    
                    m={"auto"}
                    h={"10%"}
                    textAlign={"center"}
                    pl={"20px"}
                    pt="10px"
                    
                  >
                    <Text
                      fontSize={"16px"}
                      fontFamily={"sans-serif"}
                      fontWeight={"500"}
                      color={"indigo"}
                    >
                      Link of Interview
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default InterviewDetails;
