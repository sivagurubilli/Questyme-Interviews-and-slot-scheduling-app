import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { NavLink} from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import "./index.css";
import { EventTypesNavbarArray } from "../../../Assets/Assets";
import CreateButtonDropDown from "../../../Components/OneonOneEventComponent/CreateButtonDropDown";

const OneOnOneEventsNav = () => {

  const [show,setShow] = useState<Boolean>(false)
 
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
                onClick={()=>setShow(!show)}
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
              >
                Create
              </Button>
           
            </Box>
          
          </Flex>
          {show &&   <CreateButtonDropDown   show={show} 
                setShow={setShow}/> }
        </Box>
      </Box>
    </div>
  );
};

export default OneOnOneEventsNav;
