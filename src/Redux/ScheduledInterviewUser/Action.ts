import { ActionTypes } from "./ActionTypes";

interface interviewDataState {
    type:ActionTypes.GET_EVENTS_DATA_SUCCESS,
    payload:any
}

export type Action =interviewDataState;