import React from 'react'
import Navbar from "../../../Components/Navbar/Navbar" ;
import OneOnOneEventsNav from './OneOnOneEventsNav';
import OneOnOnOneSearch from '../../../Components/AdminInterviews/OneOnOneSearch';


const OneonOneEvents= () => {
  const path = window.location.pathname;
  const segments = path.split('/');
  const InterviewsValue = segments[segments.length - 1];
  

  return (
    <div>
        <Navbar />
  <OneOnOneEventsNav />
      {InterviewsValue ==="one-on-one-interviews" ? <OneOnOnOneSearch />:""}
    </div>
  )
}

export default OneonOneEvents