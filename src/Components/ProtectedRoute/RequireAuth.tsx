import { IsAuthstate } from "../../Redux/AuthReducer/Reducer";
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../../Redux/store";
const RequireAuth = ({children}:any) => {
    const state = useSelector((state:RootState)=>state);
    const location =useLocation();
    console.log("isAuth",state);
  // if(!isAuth){
  //   return <Navigate to={"/login"} state={{from:location}} replace={true} />
  // }
  return children
}

export default RequireAuth 
