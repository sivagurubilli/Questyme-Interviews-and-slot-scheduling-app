import axios from "axios";
import { IsAuthlogin } from "./AuthInterface";
import { Dispatch } from "redux";
import {Action, isLoginFailure, isLoginSuccess} from "../Redux/AuthReducer/Action"
import {ActionTypes} from "../Redux/AuthReducer/ActionTypes"
import { LoginData } from "../Pages/Login/LoginUser";

export const loginService =(payload:LoginData)=>(dispatch:Dispatch<isLoginSuccess|isLoginFailure>):Promise<void | ActionTypes>=>{

<<<<<<< Updated upstream
 return axios.post("https://fc11-2405-201-9009-9180-d5cf-7326-b382-f7da.in.ngrok.io/auth/login",payload).then((res)=>{
  console.log("res.data",res.data);
=======
 return axios.post("https://88ca-27-116-40-89.in.ngrok.io/auth/login",payload).then((res)=>{
  console.log("res.data");
>>>>>>> Stashed changes
  dispatch({type:ActionTypes.LOGIN_SUCCESS,payload:res.data})
  return ActionTypes.LOGIN_SUCCESS
 })
 .catch((err)=>{
  console.log("err",err);
  dispatch({type:ActionTypes.LOGIN_ERROR,payload:err})
 })

}