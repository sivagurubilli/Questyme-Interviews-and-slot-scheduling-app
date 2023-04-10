import { Dispatch } from "redux";
import { Action } from "./Action";
import { ActionTypes } from "./ActionTypes";
import {SchecduledInterviewState} from "../../Redux/ScheduledInterviewUser/Reducer";

export const getPastInterviewData =(payload:SchecduledInterviewState)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionTypes.GET_ALL_PAST_EVENTS_DATA_SUCCESS,
            payload:payload
        })
    }
}