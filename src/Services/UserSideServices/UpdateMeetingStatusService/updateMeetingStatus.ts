import axios from "axios";
import { Dispatch } from "redux";
export const updateMeetingStartStatusService =(interviewId:number,userId:number,token:string)=>{
    console.log(interviewId,userId,token)
    return axios({
        method:"put",
        url:`http://35.178.167.63:8888/${interviewId}/start/${userId}`,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then((res)=>{
        console.log("resetete",res.data)
        return true
    })
    .catch((err)=>{
            console.log(err)
            return false
    })
}

export const updateMeetingEndedStatusService =(interviewId:number,userId:number)=>{
    return axios.put(`http://35.178.167.63:8888/${interviewId}/end/${userId}`)
    .then((res)=>{
        console.log("res",res.data)
        return true
    })
    .catch((err)=>{
            console.log(err)
            return false
    })
}