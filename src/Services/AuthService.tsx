import axios from "axios";
import { IsAuthlogin } from "./AuthInterface";
import { Dispatch } from "redux";
import {Action, isLoginFailure, isLoginSuccess} from "../Redux/AuthReducer/Action"
import {ActionTypes} from "../Redux/AuthReducer/ActionTypes"
import { LoginData } from "../Pages/Login/LoginUser";

export const loginService =(payload:LoginData)=>(dispatch:Dispatch<isLoginSuccess|isLoginFailure>):Promise<void | ActionTypes>=>{

 return axios.post("https://e617-2405-201-9009-9180-c96a-473e-c9a9-e6db.in.ngrok.io/auth/login",payload).then((res)=>{


  dispatch({type:ActionTypes.LOGIN_SUCCESS,payload:res.data})
  return ActionTypes.LOGIN_SUCCESS
 })
 .catch((err)=>{
  console.log("err",err);
  dispatch({type:ActionTypes.LOGIN_ERROR,payload:err})
 })

}