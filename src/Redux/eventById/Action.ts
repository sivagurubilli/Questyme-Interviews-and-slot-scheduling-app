import {ActionTypes} from "./ActionTypes"

interface IDataState {
    type:ActionTypes.GET_SINGLE_DATA_SUCCESS,
    payload:any 
}
export type Action = IDataState 