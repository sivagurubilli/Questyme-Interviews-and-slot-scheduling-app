import {Action} from "./Action";
import { ActionTypes } from "./ActionTypes";

export interface IisAuthstate {
    isAuth: boolean;
    username: string;
    userId:number
    isAdmin: boolean;
    token:string,
    user:any
  }

  const initialState ={
    isAuth:false,
    username:"",
    userId:1,
    isAdmin:false,
    token:"",
    user:{}
  };

  export const reducer =(state:IisAuthstate=initialState,action:Action):any=>{
    const {payload} =action;
    switch(action.type){
        case ActionTypes.LOGIN_SUCCESS:
          console.log("stateisAuth",state.isAuth)
            return{
                ...state,
                isAuth:true,
                username:payload.username
            }
        default:
            return state
    }
  }