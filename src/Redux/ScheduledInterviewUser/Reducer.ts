import { Action } from "./Action";
import { ActionTypes } from "./ActionTypes";

const initialState ={
    AllInterviews :{}
}

export const reducer =(state=initialState,action:Action):any=>{
    const {payload} = action;
    switch(action.type){
        case ActionTypes.GET_EVENTS_DATA_SUCCESS:
            return {
                ...state,
                AllInterviews:payload
            }
            default:
                return state
    }
};
