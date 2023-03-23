import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";


const OneOnOneEdit = ({ isNameEdit, setNameEdit }: any) => {
  return (
    <div>
        <Box   p="20px" h="auto" border="1px solid grey" mt="5px">
      <Box
        onClick={() => setNameEdit(!isNameEdit)}
        h="auto"
        cursor="pointer"
      >
        <Flex justifyContent="space-between">
          <Box>
            <Flex>
              <Box
                mt="10px"
                mr="10px"
                w="20px"
                h="20px"
                borderRadius="50%"
                backgroundColor="violet"
              />
              <FormLabel mt="10px" color="rgb(75 85 99)">
                What event is this ?{" "}
              </FormLabel>
            </Flex>

            <Flex>
              {" "}
              <Text>Title of event</Text>{" "}
              <Text ml="20px">Location of event</Text>
            </Flex>
          </Box>

          <Box>
            <Button variant="link">Cancel</Button>
            <Button borderRadius="16px" colorScheme="blue" ml="20px">
              Save & Close
            </Button>
          </Box>
        </Flex>
        </Box>
        <Divider mt="20px" mb="20px" h="2px" />
        <FormLabel mt="10px" color="rgb(75 85 99)">
          Event name{" "}
        </FormLabel>
        <Input w="40%" />
        <FormLabel mt="10px" color="rgb(75 85 99)">
          Location
        </FormLabel>
        <Select w="40%" color="rgb(75 85 99)" placeholder="Select Categoery">
          <option>Zoom</option>
          <option>Google Meet</option>
        </Select>
        <FormLabel ml="10px" color="rgb(75 85 99)">Duration</FormLabel>
      <Select w="40%">
        <option>15 mins</option>
        <option>30 mins</option>
        <option>45 mins</option>
        <option>60 mins</option>
        <option>90 mins</option>
        <option>120 mins</option>
      </Select>
        <FormLabel mt="20px" color="rgb(75 85 99)">
          Event link{" "}
        </FormLabel>

        <FormLabel mt="10px" color="rgb(75 85 99)">
          domainName/userName/{" "}
        </FormLabel>
        <Input w="40%" />

        <Flex mt="20px" justifyContent={"flex-end"}>
          <Box>
            <Button variant="link">Cancel</Button>
            <Button borderRadius="16px" colorScheme="blue" ml="20px">
              Save & Close
            </Button>
          </Box>
        </Flex>
      
      </Box>
    </div>
  );
};

export default OneOnOneEdit;
