import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/CommonComponents/Header'
import { Box, List, ListItem, ListIcon, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button,Text } from '@chakra-ui/react';
import { MdCheckCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
let title: string;
let buttonName: string;
const BookOneOnOne = () => {
    return (
        <div>
            <Navbar />
            <Header title={"Availabilities"} buttonName={"Back"} />
            <main>
                <Box
                    w={"100%"}
                    h={"100vh"}
                    bg={"#fafafa"}
                >
                    <Box
                        w={"75%"}
                        h={"100%"}
                        m={"auto"}

                    >
                        <Box
                            p={"10px"}
                        >
                            <Box>
                                <List spacing={1}>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                                    </ListItem>
                                    {/* You can also use custom icons from react-icons */}
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                                    </ListItem>
                                </List>
                            </Box>

                            <Box
                                mt={"20px"}
                                borderTop={"1px solid gray"}
                            >


                                <TableContainer>
                                    <Table>
                                        <Thead>
                                            <Tr bgColor={"rgb(101, 99, 99)"} width={"100%"}>
                                                <Th color={"white"} textAlign={"center"}>Name of Instructor</Th>
                                                <Th color={"white"} textAlign={"center"}>Type</Th>
                                                <Th color={"white"} textAlign={"center"}>Topics</Th>
                                                <Th color={"white"} textAlign={"center"}>Booking Links</Th>
                                               
                                            </Tr>
                                        </Thead>
                                        <Tbody textAlign={"center"}>
                                            <Tr fontSize={"15px"} alignContent={"center"} bgColor={"rgba(12, 135, 172, 0.318)"}>
                                                <Td  textAlign={"center"}><Text fontSize={"17px"} color={"black"}  >Ankush</Text></Td>
                                                <Td  textAlign={"center"}><Text fontSize={"17px"} color={"black"}  >Ankush</Text></Td>
                                                <Td  textAlign={"center"}><Text fontSize={"17px"} color={"black"}  >Ankush</Text></Td>
                                                <Td  textAlign={"center"} color={"blue"} textDecoration={"underline"}><Link to={"/student/booking"}><Button colorScheme="blue">Book</Button></Link></Td>
                                               
                                            </Tr>
                                            <Tr fontSize={"15px"} alignContent={"center"} bgColor={"rgba(37, 124, 151, 0.637)"}>
                                                <Td  textAlign={"center"}><Text fontSize={"17px"} color={"black"}  >Ankush</Text></Td>
                                                <Td  textAlign={"center"}><Text fontSize={"17px"} color={"black"}  >Ankush</Text></Td>
                                                <Td textAlign={"center"}><Text fontSize={"17px"} color={"black"}  >Ankush</Text></Td>
                                                <Td  textAlign={"center"} color={"blue"} textDecoration={"underline"}><Link to={"/student/booking"}><Button colorScheme="blue">Book</Button></Link></Td>
                                               
                                            </Tr>
                                            <Tr fontSize={"15px"} alignContent={"center"} bgColor={"rgba(37, 124, 151, 0.637)"}>
                                                <Td  textAlign={"center"}><Text fontSize={"17px"} color={"black"}  >Ankush</Text></Td>
                                                <Td  textAlign={"center"}><Text fontSize={"17px"} color={"black"}  >Ankush</Text></Td>
                                                <Td  textAlign={"center"}><Text fontSize={"17px"} color={"black"}  >Ankush</Text></Td>
                                                <Td  textAlign={"center"} color={"blue"} textDecoration={"underline"}><Link to={"/student/booking"}><Button colorScheme="blue">Book</Button></Link></Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </main>
        </div>
    )
}

export default BookOneOnOne
