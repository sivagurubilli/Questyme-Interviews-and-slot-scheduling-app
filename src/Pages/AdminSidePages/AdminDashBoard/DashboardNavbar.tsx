import { EventTypesNavbarArray } from "../../../Assets/Assets";
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const DashboardNavbar = () => {
  const url = window.location.pathname;
  const segments = url.split("/");
  const route = segments[segments.length - 1];
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
            w={["100%", "100%", "97%"]}
            align="center"
            m="auto"
          
           minH={"60px"}
            justifyContent={["center", "center", "space-around"]}
            color={"gray.600"}
            flexDirection={["column", "column", "row"]}
          >
            <Flex
              justifyContent={["center", "center", "flex-start"]}
              align="center"
              w={["100%", "100%", "50%"]}
              mt={[2, 2, 0]}
              mb={[2, 2, 0]}
            >
              {EventTypesNavbarArray.map((el) => (
                <Box ml={["0px", "0px", "10px"]} key={el} className="li">
                  <NavLink key={el} to={"/admin/" + el.toLowerCase()}>
                    {el.split("-").join(" ")}
                  </NavLink>
                </Box>
              ))}
            </Flex>

            <Flex
              w={["100%", "100%", "50%"]}
              justifyContent={["center", "center", "flex-end"]}
              align="center"
              mb={[2, 2, 0]}
             
            >
              <Button
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr={[0, 0, "30px"]}
                mb={["10px", "10px", 0]}
                fontSize={{ base: "12px", sm: "16px", md: "16px", lg: "16px" }}
                px={["2", "2", "4"]}
                py={["1", "1", "2"]}
                onClick={() => navigate("/admin/single-interview/create")}
              >
                Create Interviews
              </Button>
              <Button
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr={[0, 0, "30px"]}
                mb={["10px", "10px", 0]}
                fontSize={{ base: "12px", sm: "16px", md: "16px", lg: "16px" }}
                px={["2", "2", "4"]}
                py={["1", "1", "2"]}
                onClick={() => navigate("/admin/bulk-interview/create")}
              >
                Create Bulk Interviews
              </Button>
              <Button
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr={[0, 0, "30px"]}
                mb={["10px", "10px", 0]}
                fontSize={{ base: "12px", sm: "16px",md: "16px", lg: "16px" }}
                px={["2", "2", "4"]}
                py={["1", "1", "2"]}
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
                  mr={[0, 0, "30px"]}
                  mb={["10px", "10px", 0]}
                  fontSize={{ base: "12px", sm: "16px", md: "16px", lg: "16px" }}
                  px={["2", "2", "4"]}
                  py={["1", "1", "2"]}
                  onClick={() => navigate("/admin/dashboard")}
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
