import { Dispatch } from "redux";
import { ActionTypes } from "./ActionTypes";
import axios from "axios";
import { Action } from "./Action";

export const createSingleInterview = (data: any) => {
    return (dispatch: Dispatch<Action>) => {
       
        dispatch({
            type: ActionTypes.CREATE_SINGLE_INTERVIEW_REQUEST,
            payload: true
        })

        return axios.post<any>("/api/interview/create", data)

            .then((res) => {
                
                dispatch({
                    type: ActionTypes.CREATE_SINGLE_INTERVIEW_SUCCESS,
                    payload: res.data
                })
                return res;
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: ActionTypes.CREATE_SINGLE_INTERVIEW_FAILURE,
                    payload: true
                })
            })
    }
}