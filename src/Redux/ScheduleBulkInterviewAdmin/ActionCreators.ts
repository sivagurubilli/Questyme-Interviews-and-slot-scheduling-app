import { Dispatch } from "redux";
import { ActionTypes } from "./ActionTypes";
import axios from "axios";
import { Action } from "./Action";

export const createBulkInterview = (data: any) => {
    return (dispatch: Dispatch<Action>) => {
        console.log("shivam");
        dispatch({
            type: ActionTypes.CREATE_BULK_INTERVIEW_REQUEST,
            payload: true
        })
        axios.post<any>("http://localhost:8080/ScheduleInterview", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                console.log(res);
                dispatch({
                    type: ActionTypes.CREATE_BULK_INTERVIEW_SUCCESS,
                    payload: res
                })
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: ActionTypes.CREATE_BULK_INTERVIEW_FAILURE,
                    payload: true
                })
            })
    }
}