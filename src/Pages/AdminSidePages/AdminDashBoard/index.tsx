import Navbar from '../../../Components/Navbar/Navbar'
import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import { Box } from '@chakra-ui/react'

const AdminDashBoard = () => {


  return (
    <div className='container'>
      <Navbar/>
     <DashboardNavbar />
     <Box
        w="80%"
        ml="10%"
        mt="60px"
        minH="200px"
        h="auto"
        p="5%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >

        </Box>
    </div>
  )
}

export default AdminDashBoard