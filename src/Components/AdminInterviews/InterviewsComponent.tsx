
import { Box, Button, Divider, Flex, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Iinterviews } from "../../Services/AdminSideServices/GetEventsInterface";
import { useNavigate } from "react-router-dom";

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
const navigate = useNavigate()
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
        p="10px"
        boxShadow="0 5px 15px rgba(0,0,0,0.06)"
        border="1px solid grey"
        borderRadius="10px"
      >
       <Box>
       <Popover>
      <PopoverTrigger>
      <Flex cursor="pointer" pt="10px" pl="20px" pr="20px" justifyContent="flex-end">
        
            <i className="fa-solid fa-gear" style={{ color: "#778087" }}></i>{" "}
            <i
              style={{ marginLeft: "10px", color: "#778087" }}
              className="fa-solid fa-caret-down"
            ></i>{" "}
          </Flex>
      </PopoverTrigger>
      <PopoverContent mt="10px">
        <PopoverBody>
        <Box cursor="pointer" onClick={()=>navigate(`/admin/inteviews/${event.interviewId}/edit`)}>
          <Text color="black" fontSize="18px">
            Event Edit
          </Text>
          
        </Box>
        <Divider mt="5px" />
    
    
        </PopoverBody>
      </PopoverContent>
    </Popover>
  
        
        
          <Text color="#474747">{event.title}</Text>
          <Flex mt="10px" justifyContent="space-between">
            <Text color="#778087">{event.startTime} </Text>{" "}
            <Text color="#778087">{event.endTime} </Text>{" "}
          </Flex>
          <Flex mt="10px" justifyContent="space-between">
            <Text color="#778087">{event.batch}</Text>{" "}
            <Text color="#778087">{event.category} </Text>{" "}
          </Flex>
        <Flex  mt="10px" justifyContent="space-between">   <Text color="#778087">Meeting Status</Text>
         <Text color="blue" >{event.meetingStatus==="C"? "Compleated":"Pending"}</Text></Flex>
        </Box>

        <Divider mb="10px" mt="10px" />

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
