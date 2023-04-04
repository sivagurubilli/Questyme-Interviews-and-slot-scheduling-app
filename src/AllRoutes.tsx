import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OneonOneEventsCreate from './Pages/AdminSidePages/AdminOneOnOneCreate'
import OneonOneSlotsCreate from './Pages/AdminSidePages/OneOnOneSlotsEdit/OneOnOneSlotsCreate'
import OneonOneEvents from './Pages/AdminSidePages/AdminOneOnOneInterviews'
import Login from './Pages/Login/Login'
import StudentBooking from './Pages/StudentSidePages/StudentOneOnOneInterview/index';
import StudentBookingMail from './Pages/StudentSidePages/StudentOneOnOneInterview/StudentBookingMail';
import GotoOneOffMeet from './Pages/AdminSidePages/OneOffMeeting'
import UserDashboard from './Pages/UserDashboard/UserDashboard'
import BookOneOnOne from './Pages/BookInterviws/BookOneOnOne'
import InterviewDetails from './Pages/UserInterviewDetails/InterviewDetails'
import CreateBulkEvent from './Pages/AdminSidePages/AdminBulkEventSchedule/AdminBulkEventCreate'
import { CreateSingleInterview } from './Pages/AdminSidePages/AdminBulkEventSchedule/AdminInterviewCreate'


const AllRoutes = () => {
  return (
    <div>
            <Routes>
            <Route path ="/login" element ={<Login/>} />
            <Route path ="/admin/one-on-one-interviews/event-types" element={<OneonOneEvents/>}/>
            <Route path ="/admin/one-on-one-interviews/create" element={<OneonOneEventsCreate/>}/>
            <Route path ="/admin/one-on-one-interviews/edit/:id" element={<OneonOneSlotsCreate />}/>
            <Route path ="/student/booking" element={<StudentBooking />}/>
            <Route path ="/student/booking/details" element={<StudentBookingMail />}/>
            <Route path ="/admin/one-on-one-interviews/create/on-off-meet" element={<GotoOneOffMeet /> } />
            <Route path='/user/me' element={<UserDashboard />} />
            <Route path={"/user/me/book-one-on-One"}  element={<BookOneOnOne />} />
            <Route path={"/user/me/interview-details"}  element={<InterviewDetails />} />
            <Route path="/admin/bulk-interview/create" element={<CreateBulkEvent />} />
            <Route path='/admin/single-interview/create' element={<CreateSingleInterview />} />
            </Routes>
    </div>
  )
}

export default AllRoutes