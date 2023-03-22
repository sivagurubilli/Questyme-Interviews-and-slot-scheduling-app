import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'

const AllRoutes = () => {
  return (
    <div>
            <Routes>
            <Route path ="/login" element ={<Login/>} />
            </Routes>
    </div>
  )
}

export default AllRoutes