// import React, { useState } from 'react'
// import { interview } from './UserDashboard'
// import { GridItem,Flex,Box,Text ,Button,Stack,Divider} from '@chakra-ui/react';
// import { CopyIcon } from '@chakra-ui/icons';
// import { Link } from 'react-router-dom';
// import {convertTimeFormat} from "../../utils/index";

// const InterviewBox = (item:interview) => {
//     const [copyText,setCopyText] =useState("");

//     async function copyContent(text:string) {
//         try {
//           await navigator.clipboard.writeText(text);
//           const res = navigator.clipboard.readText().then((response)=>{
//               setCopyText(response)
//           })

//           /* Resolved - text copied to clipboard successfully */
//         } catch (err) {
//           console.error('Failed to copy: ', err);
//           /* Rejected - text failed to copy to the clipboard */
//         }
//       }
    
//     return ( <>
//          <GridItem
//                       key = {item.interviewId}
//                       w={"100%"}
//                       h={"auto"}
//                       border={" 1px solid indigo"}
//                       bg={"white"}
//                       boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
//                       borderRadius={"10px"}
//                       cursor={"pointer"}
//                     >
//                       <Box>
//                         <Flex
//                           justifyContent={"space-between"}
//                           alignItems={"center"}
//                         >
//                           <Box>
//                             <Text
//                               fontSize={"18px"}
//                               fontWeight={"500"}
//                               ml={"15px"}
//                               mt={"10px"}
//                             >
//                               {item.title}
//                             </Text>
//                           </Box>
                          
//                         </Flex>
//                         <Stack>
//                           <Flex
//                             justifyContent={"space-between"}
//                             mt={"10px"}
//                             pl={"15px"}
//                             pr={"15px"}
//                           >
//                             <Box>
//                               <Text>Start Time</Text>
//                               <Text>{convertTimeFormat(item.startTime)}</Text>
//                             </Box>
//                             <Box>
//                               <Text>Start Time</Text>
//                               <Text>{convertTimeFormat(item.endTime)}</Text>
//                             </Box>
//                           </Flex>
//                           <Divider orientation="horizontal" mt={"10px"} />
//                           <Flex
//                             justifyContent={"space-between"}
//                             mt={"10px"}
//                             pr={"15px"}
//                             pl={"15px"}
//                           >
//                             <Text>InterViewer</Text>
//                             <Text>Type</Text>
//                           </Flex>
//                         </Stack>
//                         <Flex
//                           justifyContent={"space-between"}
//                           borderTop={"1px solid gray"}
//                           alignItems={"center"}
//                           mt={"10px"}
//                           w={"100%"}
//                           p={"10px"}
//                         >
//                           <Box>
//                             <Flex
//                               justifyContent={"space-between"}
//                               alignItems={"center"}
//                             >
//                               {copyText && copyText==item.meetingLink?"":<CopyIcon w={"20px"} h={"20px"} />}
//                               {copyText && copyText==item.meetingLink?<Text>Copied !</Text>:<Text ml={"10px"}  onClick={()=>copyContent(item.meetingLink)}>Copy Link</Text>}
                              
//                             </Flex>
//                           </Box>
//                           <Box>
//                             <Link to={"/user/me/interview-details"}><Button variant={"link"} float={"right"} mt={"1px"}>
//                               Details &gt;
//                             </Button></Link>
//                           </Box>
//                         </Flex>
//                       </Box>
//                     </GridItem>
//                     </> )
// }

// export default InterviewBox

