import { Box, Divider, Flex, Button, Text, Checkbox } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SettingsComponent from "./SettingsComponent";

const OneonOneEventComponent = ({ event }: any) => {
  const [openDrop, setOpenDrop] = useState(false);
  const [isCopied, setCopied] = useState(false);
  const [uniquelink, setuniqueLink] = useState<string | null>("");

  useEffect(() => {
    var hashId = localStorage.getItem("eventId");
    setuniqueLink(`localhost:3001/slot/${hashId}`);
  }, []);

  //for copying link when click on copylink
  const handleCopyLink = () => {
    if (uniquelink != null) {
      navigator.clipboard.writeText(uniquelink);
    }
  };

  const username = "siva@123";
  const type = "15min";
  const month = "2023-03";
  return (
    <div>
      <Box
        w="100%"
        h="auto"
        boxShadow="0 5px 15px rgba(0,0,0,0.06)"
        border="1px solid grey"
        borderRadius="10px"
      >
        <Flex pt="20px" pl="20px" pr="20px" justifyContent="space-between">
          <Checkbox cursor="pointer" />

          <Flex onClick={() => setOpenDrop(!openDrop)} cursor="pointer">
            <i className="fa-solid fa-gear" style={{ color: "#778087" }}></i>{" "}
            <i
              style={{ marginLeft: "10px", color: "#778087" }}
              className="fa-solid fa-caret-down"
            ></i>{" "}
          </Flex>
        </Flex>
        {openDrop && <SettingsComponent event={event} setshow1={setOpenDrop} />}

        <Box p="30px">
          <Text color="#474747">{event.title}</Text>
          <Flex>
            <Text color="#778087">{event.duration} Mins</Text>{" "}
            <Text color="#778087" ml="20px">
              {event.category}
            </Text>
          </Flex>
          <Link to={"/" + username + type + month}>
            <Text color="#5269FF">view booking page </Text>
          </Link>
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
          <Button
            color="#474747"
            variant="outline"
            h="30px"
            p="10px"
            w="70px"
            borderRadius="20px"
          >
            Turn On
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default OneonOneEventComponent;
