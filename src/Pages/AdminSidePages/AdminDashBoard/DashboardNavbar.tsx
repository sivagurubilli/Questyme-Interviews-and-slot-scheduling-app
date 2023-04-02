import { EventTypesNavbarArray } from "../../../Assets/Assets";
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const DashboardNavbar = () => {
  const url = window.location.pathname;
  const segments = url.split("/");
  const route = segments[segments.length - 1]; // "add-students"
  const navigate = useNavigate();

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
            justifyContent="space-around"
            color={"gray.600"}
          >
            <Flex justifyContent={"space-around"} align="center">
              {EventTypesNavbarArray.map((el) => (
                <Box ml="10px" key={el} className="li">
                  <NavLink key={el} to={"/admin/" + el.toLowerCase()}>
                    {el.split("-").join(" ")}
                  </NavLink>
                </Box>
              ))}
            </Flex>

            <Flex>
              <Button
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr="30px"
                onClick={() => navigate("/admin/single-interview/create")}
              >
                Create Interviews
              </Button>
              <Button
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr="30px"
                onClick={() => navigate("/admin/bulk-interview/create")}
              >
                Create Bulk Interviews
              </Button>
              <Button
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr="30px"
                onClick={() => navigate("/admin/one-on-one-interviews")}
              >
                One-On-One Events
              </Button>
              {route === "dashboard" ? (
                ""
              ) : (
                <Button
                  colorScheme="blue"
                  _hover={{ cursor: "pointer" }}
                  mr="30px"
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
              )}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default DashboardNavbar;
