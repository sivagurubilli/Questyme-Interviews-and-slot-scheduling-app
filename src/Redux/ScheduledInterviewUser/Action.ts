import { ActionTypes } from "./ActionTypes";

interface scheduledInterviewSuccess {
    type:ActionTypes.GET_EVENTS_DATA_SUCCESS,
    payload:any
}

interface scheduledInterviewFailure {
    type:ActionTypes.GET_EVENTS_DATA_FAILURE,
    payload:any
}
interface scheduledInterviewLoading {
    type:ActionTypes.GET_EVENTS_DATA_REQUEST,
    payload:any
}
export type Action = scheduledInterviewSuccess | scheduledInterviewFailure | scheduledInterviewLoading;