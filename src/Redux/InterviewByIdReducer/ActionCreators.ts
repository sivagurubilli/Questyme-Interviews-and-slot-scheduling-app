import { Dispatch } from "redux";
import { ActionTypes } from "./ActionTypes";
import axios from "axios";
import { Action } from "./Action";

export const getSingleInterview = (interviewId: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.GET_SINGLE_INTERVIEW_REQUEST,
            payload: true
        })
        return axios.post<any>(`https://6786-202-142-81-182.in.ngrok.io/api/interview/${interviewId}`)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: ActionTypes.GET_SINGLE_INTERVIEW_SUCCESS,
                    payload: res.data
                })
                return res;
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: ActionTypes.GET_SINGLE_INTERVIEW_FAILURE,
                    payload: true
                })
            })
    }
}