import React from 'react'
import { Box, Flex, Heading,Text } from '@chakra-ui/react'

const StudentBooking = () => {
  return (
    <Box boxShadow='base' p='6' rounded='md' bg='white'  m='100px'>
    <Flex flexWrap="wrap" justifyContent="space-between" >
      <Box flexGrow={1} width={{ base: '90%', sm: '30%', md: '30%' }} >
        <Text>Pintu Gouda</Text>
        <Heading as='h4' size='md'>
        Counselling session
  </Heading>
      </Box>
      <Box flexGrow={1} width={{ base: '90%', sm: '30%', md: '30%' }} >b</Box>
      <Box flexGrow={1} width={{ base: '90%', sm: '30%', md: '30%' }} >c</Box>
    </Flex>
    </Box>
  )
}

export default StudentBooking
