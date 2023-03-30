import { Dispatch } from "redux"
import { Action } from "./Action"
import { ActionTypes } from "./ActionTypes"


export  const GetSingleData = (payload:any)=>{
  return (dispatch :Dispatch<Action>)=>{
     dispatch({
      type:ActionTypes.GET_SINGLE_DATA_SUCCESS,
      payload:payload
     })
  }
}