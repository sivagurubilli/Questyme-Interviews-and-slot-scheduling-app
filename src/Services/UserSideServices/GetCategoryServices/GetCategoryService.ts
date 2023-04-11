import { Action, categoryDataFailure, categoryDataLoading, categoryDataSuccess } from "../../../Redux/CategoryReducer/Action";
import { ActionTypes } from "../../../Redux/CategoryReducer/ActionTypes";
import { Dispatch } from "redux";
import axios from "axios";
export const getAllCategoryDataService =()=>(dispatch:Dispatch<categoryDataSuccess|categoryDataLoading|categoryDataFailure>):Promise<void | ActionTypes>=>{

    return axios.get("http://localhost:8080/Category")
    .then((res)=>{
        dispatch({type:ActionTypes.GET_CATEGORY_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:ActionTypes.GET_CATEGORY_FAILURE,payload:err})

    })

}