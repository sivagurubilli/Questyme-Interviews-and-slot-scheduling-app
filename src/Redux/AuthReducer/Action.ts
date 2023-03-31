import { ActionTypes } from "./ActionTypes";
import { IisAuthstate} from "./Reducer";
export interface isAuth{
    type:ActionTypes.LOGIN_SUCCESS,
    payload:IisAuthstate
}

export type Action = isAuth