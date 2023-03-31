import { Dispatch } from "redux";
import {Action} from "./Action";
import { ActionTypes } from "./ActionTypes";
import { IisAuthstate } from "./Reducer";

export const isAuthenticated =(payload:IisAuthstate)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionTypes.LOGIN_SUCCESS,
            payload:payload
        })

    }
}