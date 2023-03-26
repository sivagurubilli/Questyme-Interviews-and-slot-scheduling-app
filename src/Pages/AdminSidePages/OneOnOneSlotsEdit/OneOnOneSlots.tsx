import React from "react";
import { Box, Button, Divider, Flex, FormLabel, Text } from "@chakra-ui/react";
import SlotsSchedule from "./SlotsSchedule";

const OneOnOneSlots = ({ isSlotsEdit, setSlotsEdit }: any) => {
  return (
    <div>
      <Box h="auto" p="20px" mt="5px" border="1px solid grey">
        <Box
          onClick={() => setSlotsEdit(!isSlotsEdit)}
          h="auto"
          cursor="pointer"
          mt="5px"
        >
          <Flex justifyContent="space-between">
            <Box>
              {" "}
              <Flex mt="10px">
                <i
                  style={{ marginTop: "4PX" }}
                  className="fa-regular fa-calendar-days"
                ></i>
                <FormLabel ml="10px" color="rgb(75 85 99)">
                  When can people book this event ?
                </FormLabel>
              </Flex>
              <Flex>
                {" "}
                <Text>Event Duration</Text>{" "}
                <Text ml="20px">When can people book this event ?</Text>
              </Flex>
            </Box>

            <Box>
              <Button variant="link" mr="10px">
                Cancel
              </Button>
              <Button
                size={["sm", "md"]}
                borderRadius="16px"
                colorScheme="blue"
              >
                Save & Close
              </Button>
            </Box>
          </Flex>
        </Box>

        <Divider mt="20px" mb="20px" h="2px" />
        <FormLabel ml="10px" color="rgb(75 85 99)">
          {" "}
          Set availability time for this event type{" "}
        </FormLabel>
        <SlotsSchedule />

        <Divider mt="20px" mb="20px" h="2px" />
      </Box>
    </div>
  );
};

export default OneOnOneSlots;
