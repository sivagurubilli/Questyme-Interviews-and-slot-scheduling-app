import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OneonOneEventsCreate from './Pages/AdminSidePages/AdminOneOnOneCreate'
import OneonOneEvents from './Pages/AdminSidePages/AdminOneOnOneInterviews'
import StudentBooking from './Pages/StudentSidePages/StudentOneOnOneInterview/index';
import GotoOneOffMeet from './Pages/AdminSidePages/OneOffMeeting'
import UserDashboard from './Pages/UserDashboard/UserDashboard'
import BookOneOnOne from './Pages/BookInterviews/BookOneOnOne'
import InterviewDetails from './Pages/UserInterviewDetails/InterviewDetails'
import OneOnOneSlotsView from './Pages/AdminSidePages/OneOnOneSlotsView'
import CreateBulkEvent from './Pages/AdminSidePages/AdminBulkEventSchedule/AdminBulkEventCreate'
import { CreateSingleInterview } from './Pages/AdminSidePages/AdminBulkEventSchedule/AdminInterviewCreate'
import RequireAuth from './Components/ProtectedRoute/RequireAuth'
import { LoginUser } from './Pages/Login/LoginUser'
import AdminDashBoard from './Pages/AdminSidePages/AdminDashBoard'
import AddStudents from './Pages/AdminSidePages/AddStudents'
import OneonOneSlotsEdit from './Pages/AdminSidePages/OneOnOneSlotsEdit'
import PastInterviews from './Pages/AdminSidePages/AdminPastInterviews';
import AddDaysAvailability from './Pages/AdminSidePages/AddAvailabilityForSlots';
import FutureInterviews from './Pages/AdminSidePages/FutureInterviews';


const AllRoutes = () => {
  return (
    <div>
            <Routes>
            <Route path ="/login" element ={<LoginUser/>} />

            {/* <Route path ="/login" element ={<Login/>} /> */}
            <Route path ="/admin/one-on-one-interviews" element={<OneonOneEvents/>}/>

            <Route path ="/admin/one-on-one-interviews/create" element={<OneonOneEventsCreate/>}/>
            <Route path ="/admin/one-on-one-interviews/:id/edit" element={<OneonOneSlotsEdit/>}/>
            <Route path ="/slots/view" element ={<OneOnOneSlotsView/>} />
            <Route path ="/student/booking/:id" element={<StudentBooking />}/>
            <Route path ="/admin/dashboard" element={<AdminDashBoard />} />
            <Route path ="/admin/upcoming-interviews" element={<FutureInterviews/>}/>
            <Route path ="/admin/add-avialability" element={<AddDaysAvailability/>}/>
            <Route path ="/admin/past-interviews" element ={<PastInterviews />} />
            <Route path ="/admin/add-students"  element ={<AddStudents/>} />
            <Route path ="/admin/one-on-one-interviews/create/on-off-meet" element={<GotoOneOffMeet /> } />
            <Route path='dashboard' element={<RequireAuth><UserDashboard /></RequireAuth>} />
            <Route path={"/dashboard/book-one-on-One"}  element={<BookOneOnOne />} />
            <Route path={"/dashboard/interview/:id"}  element={<InterviewDetails />} />
            <Route path="/admin/bulk-interview/create" element={<CreateBulkEvent />} />
            <Route path='/admin/single-interview/create' element={<CreateSingleInterview />} />
            </Routes>
    </div>
  )
}

export default AllRoutes