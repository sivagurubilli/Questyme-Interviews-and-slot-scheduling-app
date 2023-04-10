import {
  scheduledInterviewFailure,
  scheduledInterviewLoading,
  scheduledInterviewSuccess,
} from "@/Redux/ScheduledInterviewUser/Action";
import { interview } from "../../../Pages/UserDashboard/UserDashboard";
import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../../../Redux/ScheduledInterviewUser/ActionTypes";

export const GetAllScheduledInterView =
  () =>
    (
      dispatch: Dispatch<
        scheduledInterviewLoading
        | scheduledInterviewSuccess
        | scheduledInterviewFailure
      >
    ): Promise<void | ActionTypes> => {
      return axios
        .get("http://localhost:8080/interviews")
        .then((res) => {
          console.log("resinterviews", res.data)
          dispatch({
            type: ActionTypes.GET_EVENTS_DATA_SUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log("err", err);
          dispatch({ type: ActionTypes.GET_EVENTS_DATA_FAILURE, payload: err });
        });
    };
