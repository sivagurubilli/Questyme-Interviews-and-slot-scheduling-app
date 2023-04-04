import axios from "axios";
import { IsAuthlogin } from "./AuthInterface";
import { Dispatch } from "redux";
import {Action, isLoginFailure, isLoginSuccess} from "../Redux/AuthReducer/Action"
import {ActionTypes} from "../Redux/AuthReducer/ActionTypes"
import { LoginData } from "../Pages/Login/LoginUser";

export const loginService =(payload:LoginData)=>(dispatch:Dispatch<isLoginSuccess|isLoginFailure>):Promise<void | ActionTypes>=>{

 return axios.post("https://1db8-2405-201-9009-9180-3c7d-d5ca-1d2d-fa19.in.ngrok.io/auth/login",payload).then((res)=>{
  console.log("res.data");
  dispatch({type:ActionTypes.LOGIN_SUCCESS,payload:res.data})
  return ActionTypes.LOGIN_SUCCESS
 })
 .catch((err)=>{
  console.log("err",err);
  dispatch({type:ActionTypes.LOGIN_ERROR,payload:err})
 })

}