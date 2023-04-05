import { Dispatch } from "redux";
import { ActionTypes } from "./ActionTypes";
import axios from "axios";
import { Action } from "./Action";

export const createSingleInterview = (data: any) => {
    return (dispatch: Dispatch<Action>) => {
        console.log("shivam");
        dispatch({
            type: ActionTypes.CREATE_SINGLE_INTERVIEW_REQUEST,
            payload: true
        })
        axios.post<any>("https://18dd-202-142-81-195.in.ngrok.io/api/interview/create", data)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: ActionTypes.CREATE_SINGLE_INTERVIEW_SUCCESS,
                    payload: res.data
                })
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