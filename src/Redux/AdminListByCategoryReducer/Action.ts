import { ActionTypes } from "./ActionTypes";

export interface adminLIstByCategorySuccess{
    type:ActionTypes.GET_ALL_ADMIN_LIST_BY_CATEGORY_SUCCESS,
    payload:any
}

export interface adminLIstByCategoryLoading{
    type:ActionTypes.GET_ALL_ADMIN_LIST_BY_CATEGORY_REQUEST,
    payload:true
}

export interface adminLIstByCategoryFailure{
    type:ActionTypes.GET_ALL_ADMIN_LIST_BY_CATEGORY_FAILURE,
    payload:true
}

export type Action = adminLIstByCategoryLoading |adminLIstByCategorySuccess|adminLIstByCategoryFailure ;