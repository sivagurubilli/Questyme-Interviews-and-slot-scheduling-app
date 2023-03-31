import { IisAuthstate } from "../../Redux/AuthReducer/Reducer";
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({children}:any) => {
    const isAuth = useSelector((state:any)=>state.AuthReducer.isAuth);
    const location =useLocation();
    console.log("isAuth",isAuth);
//   if(!isAuth){
//     return <Navigate to={"/login"} state={{from:location}} replace={true} />
//   }
  return children
}

export default RequireAuth
