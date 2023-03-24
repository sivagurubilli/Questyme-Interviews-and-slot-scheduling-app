import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import "./index.css";
import { EventTypesNavbarArray } from "../../../Assets/Assets";

const OneOnOneEventsNav = () => {
  const navigate = useNavigate();
  const GotoCreateEvent = () => {
    navigate("/admin/one-on-one-interviews/create");
  };
  return (
    <div>
      <Box
        position="relative"
        h="auto"
        marginTop="2px"
        bg="whiteAlpha.900"
        w="100%"
      >
        <Box boxShadow="sm">
          <Flex
            position={"relative"}
            w={"97%"}
            align="center"
            m="auto"
            h={"60px"}
            justifyContent={"space-around"}
            color={"gray.600"}
          >
            <Box>
              <Flex justifyContent={"space-around"} align="center">
                {EventTypesNavbarArray.map((el) => (
                  <Box ml="10px" key={el} className="li">
                    <NavLink
                      key={el}
                      to={"/admin/one-on-one-interviews/" + el.toLowerCase()}
                    >
                      {el.split("-").join(" ")}
                    </NavLink>
                  </Box>
                ))}
              </Flex>
            </Box>
            <Box ml={"50px"}>
              {" "}
              <Button
                leftIcon={<FaPlus />}
                onClick={GotoCreateEvent}
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
              >
                Create
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default OneOnOneEventsNav;




