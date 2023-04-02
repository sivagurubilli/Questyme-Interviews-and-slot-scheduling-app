import { Dispatch } from "redux";
import { Action } from "./Action";
import { ActionTypes } from "./ActionTypes";

export const getInterviewData =(payload:any)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionTypes.GET_EVENTS_DATA_SUCCESS,
            payload:payload
        })
    }
}