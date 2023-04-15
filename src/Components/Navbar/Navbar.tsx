
import { Box,  Flex, Image, Button, Popover, PopoverTrigger, PopoverContent, PopoverBody, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { QuesTymes, masaiImage } from '../../Assets/Assets'


const Navbar = () => {
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  const userType = userDetails?.user?.roles[0]?.name
  const linkTo = userType === "ROLE_ADMIN" ? "/admin/dashboard" : "/dashboard";

  const navigate = useNavigate();

  const Logout = () => {

    localStorage.clear();
     sessionStorage.clear()

    navigate("/login");
  };
  return (
    <div>
       <Box position="relative" h="auto" top="0" bg="whiteAlpha.900" w="100%">
      <Box boxShadow="sm">
        <Flex
          position={"relative"}
          w={"97%"}
          align="center"
          m="auto"
          h={"60px"}
          justifyContent={"space-between"}
          color={"gray.600"}
        >
          <Flex align="center" flex={"2"}>
          <Link to={linkTo}>
              {" "}

              <Image h="50px" w="100px" objectFit="contain" src={masaiImage} alt="Masai logo" />
            </Link>
      </Flex>
      <Flex align="center" flex={"2"}>
          <Link to={linkTo}>
              {" "}

              <Image h="50px" w="100px" objectFit="contain" src={QuesTymes} alt="Masai logo" />
            </Link>
      </Flex>

      <Box ml={"50px"}>
                {" "}
                <Button variant={"link"} _hover={{ cursor: "pointer" }}>
                <Popover>
      <PopoverTrigger>
        <button>{userDetails?.user?.name}</button>
      </PopoverTrigger>
      <PopoverContent mt="10px">
        <PopoverBody>
        <Box cursor="pointer">
          <Text color="black" fontSize="18px">
           Share Your Link
          </Text>
        
        </Box>
        <Divider mt="5px" />
        <Box cursor="pointer" onClick={Logout}>
          <Text color="black" fontSize="18px">
           Logout
          </Text>
         
        </Box>
    
        </PopoverBody>
      </PopoverContent>
    </Popover>
                </Button>
                <i
                  style={{ marginLeft: "10px" }}
                  className="fa-solid fa-caret-down"
                ></i>
                </Box>
              
      </Flex>
      
      </Box>
    
   </Box>

    </div>
  )
}

export default Navbar