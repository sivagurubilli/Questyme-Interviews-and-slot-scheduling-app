import React from 'react'
import FutureOrPastInterviewsComponent from '../../../Components/AdminInterviews/PastOrFutureInterview';
import Navbar from "../../../Components/Navbar/Navbar" ;
import OneOnOneEventsNav from './OneOnOneEventsNav';


const OneonOneEvents= () => {
  const path = window.location.pathname;
  const segments = path.split('/');
  const InterviewsValue = segments[segments.length - 1];
  

  return (
    <div>
        <Navbar />
  <OneOnOneEventsNav />
      {InterviewsValue ==="one-on-one-interviews" ? <FutureOrPastInterviewsComponent />:""}
    </div>
  )
}

export default OneonOneEvents