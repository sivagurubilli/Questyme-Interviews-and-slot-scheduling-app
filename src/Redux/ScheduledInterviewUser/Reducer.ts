import { Action } from "./Action";
import { ActionTypes } from "./ActionTypes";
export interface interview{
    "interviewId": number,
          "interviewerName": string,
          "intervieweeName": string,
          "startTime": string,
          "endTime": string,
          "date": string,
          "category": string,
          "instructions": string,
          "title": string,
          "meetingLink": string,
          "batch": string,
          "meetingStatus": string,
          "studentNote": string,
          "adminFeedback": string
  }
export interface SchecduledInterviewState {
    isLoading:boolean,
    isError:boolean,
    interviews:interview[]
}
const initialState:SchecduledInterviewState ={
    isLoading:false,
    isError:false,
    interviews:[]
}

export const reducer =(state:SchecduledInterviewState=initialState,action:Action):any=>{
    const {payload} = action;
    switch(action.type){
        case ActionTypes.GET_EVENTS_DATA_SUCCESS:
            return {
                ...state,
                interviews:payload,
                isLoading:false,
                isError:false
            }
        case ActionTypes.GET_EVENTS_DATA_REQUEST:
                return {
                    ...state,
                    isLoading:true,
                    IsError:false,
                } 
        case ActionTypes.GET_EVENTS_DATA_FAILURE:
                    return {
                        ...state,
                        isLoading:false,
                    IsError:true,
                    }               
            default:
                return state
    }
};
