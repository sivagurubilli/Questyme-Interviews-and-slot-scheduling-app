import { ActionTypes } from "../../../Redux/AdminListByCategoryReducer/ActionTypes";
import { Dispatch } from "redux";
import axios from "axios";
import {
  adminLIstByCategoryFailure,
  adminLIstByCategoryLoading,
  adminLIstByCategorySuccess,
} from "../../../Redux/AdminListByCategoryReducer/Action";

export const getAlladminListByCategoryService =
  (type: string) =>
  (
    dispatch: Dispatch<adminLIstByCategorySuccess | adminLIstByCategoryFailure>
  ): Promise<void | ActionTypes> => {
    return axios
      .get("http://localhost:8080/adminListBycategory")
      .then((res) => {
        console.log("resadmins", res.data);
        dispatch({
          type: ActionTypes.GET_ALL_ADMIN_LIST_BY_CATEGORY_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: ActionTypes.GET_ALL_ADMIN_LIST_BY_CATEGORY_FAILURE,
          payload: err,
        });
      });
  };
