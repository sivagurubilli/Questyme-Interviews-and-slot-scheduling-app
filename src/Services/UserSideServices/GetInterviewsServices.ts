import {
  scheduledInterviewFailure,
  scheduledInterviewLoading,
  scheduledInterviewSuccess,
} from "@/Redux/ScheduledInterviewUser/Action";
import { interview } from "../../Pages/UserDashboard/UserDashboard";
import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../../Redux/ScheduledInterviewUser/ActionTypes";

export async function GetAllInterviewService(){
    try{
        const response = await axios.get("http://localhost:8080/interviews");
        return response.data
    }catch(error:any){
        return error.response
    }
}

// for getting future interviews service
export async function GetFutureInterviewService(id:string,token:string){
    try{

        const response = await axios.get(`https://18dd-202-142-81-195.in.ngrok.io/${id}/upcoming-interviews`,{
            
                headers: {
                  Authorization: `Bearer ${token}`,
                }
        });

        return response.data
    }catch(error:any){
        return error.response
    }
}

// for getting past interviews service
export async function GetPastInterviewService(id:string,token:string){
    try{
        const response = await axios.get(`https://18dd-202-142-81-195.in.ngrok.io/${id}/past-interviews`,{ 
             headers: {
            Authorization: `Bearer ${token}`,
          }});
        return response.data
    }catch(error:any){
        return error.response
    }
}

//for getting single data service
export async function GetSingleInterviewService(id:string){
    try{
        const response = await axios.get(`/${id}`);
        return response.data
    }catch(error:any){
        return error.response
    }
}

//for deleting slots service
export async function DeleteSlotsService(id:string){
    try{
        const response = await axios.get(`/slot/deleteslot/${id}`);
        return response.data
    }catch(error:any){
        return error.response
    }
}




//for getting all slot dates  service
export async function GetAllSlotDateService(id:string){
    try{
        const response = await axios.get(`/slot/deleteslot/${id}`);
        return response.data
    }catch(error:any){
        return error.response
    }
}


//for getting all slot for particular date  service
export async function GetAllSlotsService(id:string){
    try{
        const response = await axios.get(`/slot/get-slot-dates/${id}`);
        return response.data
    }catch(error:any){
        return error.response
    }
}


export const GetAllScheduledInterView =
  () =>
  (
    dispatch: Dispatch<
      | scheduledInterviewLoading
      | scheduledInterviewSuccess
      | scheduledInterviewFailure
    >
  ): Promise<void | ActionTypes> => {
    return axios
      .get("http://localhost:8080/interviews")
      .then((res) => {
        console.log("resinterviews",res.data)
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
