import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import CreateButtonDropDown from "../../../Components/OneonOneEventComponent/CreateButtonDropDown";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const OneOnOneEventsNav = () => {

  const [show,setShow] = useState<Boolean>(false)
const navigate = useNavigate()

  const GotoSlotsViewPage = () => {
    navigate(`/slot/${1}`);
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
            justifyContent={"flex-end"}
            color={"gray.600"}
          >
               <Button
                 onClick={()=>navigate(-1)}
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr="30px"
              >
               Back
              </Button>
             <Button
                leftIcon={<FaEye />}
                onClick={()=>GotoSlotsViewPage()}
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr="30px"
              >
                View Slots
              </Button>
           
              <Button
                leftIcon={<FaPlus />}
                onClick={()=>setShow(!show)}
                colorScheme="blue"
                _hover={{ cursor: "pointer" }}
                mr="110px"
              >
                Create
              </Button>

           
          </Flex>
          {show &&   <CreateButtonDropDown   show={show} 
                setShow={setShow}/> }
        </Box>
      </Box>
    </div>
  );
};

export default OneOnOneEventsNav;
