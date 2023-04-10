
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Iinterviews } from "../../Services/AdminSideServices/GetEventsInterface";

interface ProfilecomponentProps {
  event: Iinterviews;
  GetEvents: any;
}

const AdminInterviewBox = ({
  event,
  GetEvents,
}: ProfilecomponentProps) => {

  const [isCopied, setCopied] = useState(false);
  const [uniquelink, setuniqueLink] = useState<string | null>("");

  useEffect(() => {
    setuniqueLink(event.meetingLink);
  }, [event.meetingLink]);

  //for copying link when click on copylink
  const handleCopyLink = () => {
    if (uniquelink != null) {
      navigator.clipboard.writeText(uniquelink);
    }
  };

  return (
    <div>
      <Box
        w="100%"
        h="auto"
        boxShadow="0 5px 15px rgba(0,0,0,0.06)"
        border="1px solid grey"
        borderRadius="10px"
      >
       
    
        <Box p="20px">
          <Text color="#474747">{event.title}</Text>
          <Flex mt="10px" justifyContent="space-between">
            <Text color="#778087">{event.startTime} </Text>{" "}
            <Text color="#778087">{event.endTime} </Text>{" "}
          </Flex>
          <Flex mt="10px" justifyContent="space-between">
            <Text color="#778087">{event.batch}</Text>{" "}
            <Text color="#778087">{event.category} </Text>{" "}
          </Flex>
        </Box>

        <Divider mb="10px" />

        <Flex justifyContent="space-between" p="10px">
          {isCopied ? (
            <Flex cursor="pointer" onClick={() => setCopied(!isCopied)}>
              {" "}
              <i
                style={{ padding: "5px", color: "grren" }}
                className="fa-solid fa-check"
              ></i>{" "}
              <Text>Copied</Text>
            </Flex>
          ) : (
            <Flex cursor="pointer" onClick={() => setCopied(!isCopied)}>
              <i
                className="fa-regular fa-copy"
                style={{
                  margin: "5px 5px ",
                  cursor: "pointer",
                  color: "#778087",
                }}
              ></i>{" "}
              <Text color="#778087" onClick={handleCopyLink}>
                Copy Link
              </Text>

            </Flex>
          )}

          <Button variant="link" color="blue">View Details</Button>
        </Flex>
      </Box>
    </div>
  );
};

export default AdminInterviewBox;
