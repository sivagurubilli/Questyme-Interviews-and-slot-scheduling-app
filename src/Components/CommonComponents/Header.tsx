import React from 'react';
import { Box,Text,Button } from '@chakra-ui/react';

const Header = ({title,buttonName}:any) => {
  return (
    <div>
      <header>
                <Box bg={"white"}>
                    <Box w={"75%"} h={"auto"} m={"auto"}>
                        <Box
                            w={"100%"}
                            h={"70px"}
                            m={"auto"}
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Text
                                fontSize={"1.7rem"}
                                fontWeight={"500"}
                                fontFamily={"sans-serif"}
                            >
                            {title}
                            </Text>
                            <Button colorScheme="blue">{buttonName}</Button>
                        </Box>
                        {/* <Box border={"1px solid indigo"} w={"100%"} h={"60px"} m={"auto"}></Box> */}
                    </Box>
                </Box>
            </header>
    </div>
  )
}

export default Header
