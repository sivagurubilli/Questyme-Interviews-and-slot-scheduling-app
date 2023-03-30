import React from "react";
import { Box, Text, Divider, Flex, Switch, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { DeleteEventSevice } from "../../Services/AdminSideServices/GetEventsService";

interface ProfilecomponentProps {
  setshow1: (show: boolean) => void;
}

const SettingsComponent = (
 
  { event }: any,
  { setshow1 }: ProfilecomponentProps
) => {
  const navigate = useNavigate();
  const toast = useToast()
  console.log(event);
  const GotoEdit = () => {
    navigate(`/admin/one-on-one-interviews/${event.id}/edit`);
  };
const DeleteEvent=async(id:any)=>{
  try{
 const response = await DeleteEventSevice(id)
   
   if(response.id){
    toast({
      title: "Event Deleted Successfully",
      status: "success",
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  
    setshow1(false)
   }
  }catch(error){
    toast({
      title: "Something Went Wrong",
      status: "error",
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  }
}
  
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        position="absolute"
        width="200px"
        height="auto"
        marginTop="10px"
        marginLeft="7%"
        border="1px solid #778087"
        borderRadius="5px"
        boxShadow="0 5px 15px rgba(0,0,0,0.06)"
        backgroundColor="white"
        p={3}
        zIndex="1"
      >
        <Flex pt="5px" onClick={GotoEdit}>
          <i className="fa-solid fa-pen" style={{ marginTop: "5px" }}></i>
          <Text color="#778087" fontSize="sm" pl="15px">
            <Link to="">Edit</Link>
          </Text>
        </Flex>
        <Flex pt="5px">
          <i
            className="fa-regular fa-note-sticky"
            style={{ marginTop: "5px" }}
          ></i>
          <Text color="#778087" pl="15px">
            <Link to="" onClick={() => setshow1(false)}>
              Add internal note
            </Link>
          </Text>
        </Flex>
        <Flex pt="5px">
          <i
            className="fa-regular fa-trash-can"
            style={{ marginTop: "5px" }}
          ></i>
          <Text color="#778087" pl="15px">
            <Link to="" onClick={() => DeleteEvent(event.id)}>
              Delete
            </Link>
          </Text>
        </Flex>
        <Divider mt="10px" borderColor="gray.300" />
        <Flex justifyContent="space-between">
          <Text color="#778087" padding="10px" _hover={{ cursor: "pointer" }}>
            On/Off
          </Text>

          <Switch ml="50px" mt="13px" />
        </Flex>
      </Box>
    </div>
  );
};

export default SettingsComponent;
