import axios from "axios";
import { Dispatch } from "redux";
export const updateMeetingStartStatusService =()=>{
    return axios.put("")
    .then((res)=>{
        console.log("res",res.data)
    })
    .catch((err)=>{
            console.log(err)
    })
}

export const updateMeetingEndedStatusService =()=>{
    return axios.put("")
    .then((res)=>{
        console.log("res",res.data)
    })
    .catch((err)=>{
            console.log(err)
    })
}