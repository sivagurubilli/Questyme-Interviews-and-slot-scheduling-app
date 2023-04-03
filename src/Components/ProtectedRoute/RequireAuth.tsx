import { IsAuthstate } from "../../Redux/AuthReducer/Reducer";
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../../Redux/store";
const RequireAuth = ({children}:any) => {
    const isAuth = useSelector((state:RootState)=>state.AuthReducer.isAuth);
    const location =useLocation();
    console.log("isAuth",isAuth);
  if(!isAuth){
    return <Navigate to={"/login"} state={{from:location}} replace={true} />
  }
  return children
}

export default RequireAuth 
