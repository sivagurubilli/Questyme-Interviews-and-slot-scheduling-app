import { IEventValues } from "../../Pages/AdminSidePages/Interfacces";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import SettingsComponent from "./SettingsComponent";

interface ProfilecomponentProps {
  event: IEventValues;
  GetEvents: any;
}

const OneonOneEventComponent = ({
  event,
  GetEvents,
}: ProfilecomponentProps) => {
  const [openDrop, setOpenDrop] = useState(false);
  const [isCopied, setCopied] = useState(false);
  const [uniquelink, setuniqueLink] = useState<string | null>("");


  
// creating unique hashed link for admin copy paste for slots booking
  useEffect(() => {
    setuniqueLink(`http://35.178.167.63:8888/student/booking/${event.id}`);
  }, [event.id]);

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
        <Flex pt="20px" pl="20px" pr="20px" justifyContent="flex-end">
          <Flex onClick={() => setOpenDrop(!openDrop)} cursor="pointer">
            <i className="fa-solid fa-gear" style={{ color: "#778087" }}></i>{" "}
            <i
              style={{ marginLeft: "10px", color: "#778087" }}
              className="fa-solid fa-caret-down"
            ></i>{" "}
          </Flex>
        </Flex>
        {openDrop && (
          <SettingsComponent
            event={event}
            setshow1={setOpenDrop}
            GetEvents={GetEvents}
          />
        )}

        <Box p="20px">
          <Text color="#474747">{event.title}</Text>
          <Flex mt="10px" justifyContent="space-between">
          <Text color="#778087">Duration</Text>{" "}
            <Text color="#778087">{event.duration} Mins</Text>{" "}
           
          </Flex>
          <Flex mt="10px" justifyContent="space-between">
          <Text color="#778087">Category</Text>{" "}
          <Text color="#778087">{event.category?.toLowerCase()}</Text>
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
        </Flex>
      </Box>
    </div>
  );
};

export default OneonOneEventComponent;
