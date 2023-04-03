import React, { useState, useEffect } from "react";
import { Box, Flex, Button, ListItem, Text, List } from "@chakra-ui/react";
import axios from "axios";
interface Instructor {
  instructor: string;
  category: string;
}
// interface BookSlotArray {
//     [index: number]: string;
//   }

export const BookSlot = () => {
  const [loading, setLoading] = useState(false);
  const [isName, setIsName] = useState([]);
  const [isInstructors, setIsInstructors] = useState<Instructor[]>([]);
  const [bookSlot, setBookSlot] = useState([]);
  useEffect(() => {
    setLoading(true);
   
    axios
      .get("http://localhost:8080/instructors")
      .then((response) => {
        console.log("lkdfsj", response.data);
        setIsInstructors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
     
  }, []);
  const showSlotDays=()=>{
    axios
    .get("http://localhost:8080/slotstesting")
    .then((response) => {
      setLoading(false);
      setBookSlot(response.data[1]);
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
    });
  }
  const showSlot=()=>{
    axios
    .get("http://localhost:8080/slots")
    .then((response) => {
      setIsName(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
    });
  }
  console.log(bookSlot,"dsjkfohodjah")
  return (
    <Box bg="#f3f4f6">
      <Box
        boxShadow="base"
        p={["4", "6"]}
        rounded="md"
        bg="white"
        mx={["4", "100px"]}
        my="4"
      >
        <Flex
          flexWrap={["wrap", "nowrap"]}
          justifyContent={["center", "space-between"]}
          alignItems={["center", "flex-start"]}
        >
          <Box p="4">
            <Text fontSize="2xl" fontWeight="bold" mb="4">
              Instructors
            </Text>
            <List spacing="3">
              {isInstructors &&
                isInstructors.map((item, index) => {
                  return (
                    <ListItem key={index} onClick={showSlotDays}>
                      <Text fontSize="lg" fontWeight="bold">
                        {item.instructor}
                      </Text>
                      <Text fontSize="md">{item.category}</Text>
                    </ListItem>
                  );
                })}
            </List>
          </Box>
          <Box p="4">
            <Text fontSize="2xl" fontWeight="bold" mb="4">
              Slot Days
            </Text>
            {bookSlot && bookSlot.length > 0 ? (
              <List spacing="3">
                {bookSlot.map((item, index) => {
                  return (
                    <ListItem key={index} onClick={showSlot}>
                      <Text fontSize="lg" fontWeight="bold">
                        {item}
                      </Text>
                      <Text fontSize="md">{item}</Text> 
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <Text fontSize="md">No booked slots</Text>
            )}
          </Box>
          <Box>
            <Button
              w={["100%", "180px"]}
              size={["sm", "md"]}
              borderColor="blue.500"
              color="white"
              bg="blue"
              mt="5"
            >
              Book Slot
            </Button>
            {loading ? (
              <Box>...Loading</Box>
            ) : (
              <Box>
                {" "}
                {isName &&
                  isName.map((e, i) => {
                    return (
                      <Box key={i}>
                        <Box>
                          {" "}
                          <Button
                            w={["100%", "180px"]}
                            size={["sm", "md"]}
                            borderColor="blue.500"
                            color="blue"
                            _hover={{ bg: "blue", color: "white" }}
                            // onClick={handleClick}
                            mt="5"
                          >
                            {e}
                          </Button>
                        </Box>
                      </Box>
                    );
                  })}
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default BookSlot;
