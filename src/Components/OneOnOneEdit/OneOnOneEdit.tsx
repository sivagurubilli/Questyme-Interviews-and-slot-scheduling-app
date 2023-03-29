import { Box, Divider, Flex, FormLabel, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import OneOnOneEventsCreateInput from "../OneOnOneEventsCreateInput";

interface IEventValues {
  eventName: string;
  location: string;
  duration: string;
  eventLink: string;
}

const OneOnOneEdit = ({ isNameEdit, setNameEdit }: any) => {
  const [EventValues, setEventValues] = useState<IEventValues>({
    eventName: "",
    location: "",
    duration: "",
    eventLink: "",
  });

  return (
    <div>
      <Box p="20px" h="auto" border="1px solid grey" mt="5px">
        <Box onClick={() => setNameEdit(!isNameEdit)} h="auto" cursor="pointer">
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
          </Flex>
        </Box>
        <Divider mt="20px" mb="20px" h="2px" />

        <OneOnOneEventsCreateInput
          EventValues={EventValues}
          setEventValues={setEventValues}
          SubmitVal={"Save"}
          setNameEdit ={setNameEdit}
        />
      </Box>
    </div>
  );
};

export default OneOnOneEdit;
