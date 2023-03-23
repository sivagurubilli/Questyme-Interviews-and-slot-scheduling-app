import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OneonOneEventsCreate from './Pages/AdminSidePages/AdminOneOnOneCreate'
import OneonOneSlotsCreate from './Pages/AdminSidePages/OneOnOneSlotsEdit/OneOnOneSlotsCreate'
import OneonOneEvents from './Pages/AdminSidePages/AdminOneOnOneInterviews'
import Login from './Pages/Login/Login'
import StudentBooking from './Pages/StudentSidePages/StudentOneOnOneInterview/index';

const AllRoutes = () => {
  return (
    <div>
            <Routes>
            <Route path ="/login" element ={<Login/>} />
            
            <Route path ="/admin/one-on-one-interviews/event-types" element={<OneonOneEvents/>}/>
            <Route path ="/admin/one-on-one-interviews/create" element={<OneonOneEventsCreate/>}/>
            <Route path ="/admin/one-on-one-interviews/edit/:id" element={<OneonOneSlotsCreate />}/>
            <Route path ="/student/booking" element={<StudentBooking />}/>
            </Routes>
    </div>
  )
}

export default AllRoutes