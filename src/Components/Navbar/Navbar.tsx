
import { Box,  Flex, Image, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminProfileComponent from './AdminProfileComponent'
import { masaiImage } from '../../Assets/Assets'

const Navbar = () => {
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  const [show1, setshow1] = useState(false);
  
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
            <Link to="/admin/dashboard">
              {" "}
              <Image objectFit="contain" src={masaiImage} alt="Masai logo" />
            </Link>
      </Flex>

      <Box ml={"50px"} onClick={() => setshow1(!show1)}>
                {" "}
                <Button variant={"link"} _hover={{ cursor: "pointer" }}>
                  {userDetails.user.name}
                </Button>
                <i
                  style={{ marginLeft: "10px" }}
                  className="fa-solid fa-caret-down"
                ></i>
              </Box>
      </Flex>
      </Box>
      {show1 && <AdminProfileComponent setshow1={setshow1} />}
   </Box>

    </div>
  )
}

export default Navbar