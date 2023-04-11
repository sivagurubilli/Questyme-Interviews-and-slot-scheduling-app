import { Action, pastInterviewFailure, pastInterviewLoading, pastInterviewSuccess } from "../../../Redux/PastInterviewReducer/Action";
import { ActionTypes } from "../../../Redux/PastInterviewReducer/ActionTypes";
import { Dispatch } from "redux";
import axios from "axios";

export const getAllPastInterviewService=()=>(dispatch:Dispatch<Action>):Promise<void | ActionTypes>=>{
            return axios.get("http://localhost:8080/interviews")
            .then((res)=>{
                console.log("past",res.data)
                dispatch({type:ActionTypes.GET_ALL_PAST_EVENTS_DATA_SUCCESS,payload:res.data})
            })
            .catch((err)=>{
                console.log(err)
                dispatch({type:ActionTypes.GET_ALL_PAST_EVENTS_DATA_FAILURE,payload:err})
            })
}