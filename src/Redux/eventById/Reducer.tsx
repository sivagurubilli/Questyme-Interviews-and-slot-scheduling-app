import { Action } from "./Action";
import { ActionTypes } from "./ActionTypes";


const initialState = {
 AllData:{}
};

export const reducer = (
  state= initialState,
  action: Action
): any => {
  const { payload } = action;
  switch (action.type) {
    case ActionTypes.GET_SINGLE_DATA_SUCCESS:
      return { ...state, AllData:payload };
    default:
      return state;
  }
};