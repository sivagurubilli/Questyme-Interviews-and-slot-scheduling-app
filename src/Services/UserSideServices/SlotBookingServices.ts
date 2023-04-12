import axios from "axios"

export const getSlotDays = async (id:any) => {
    try {
      const response = await axios.get(`http://35.178.167.63:8888/slot/get-slot-dates/${id}`);
      if( response.data.dates){
        return  response.data.dates
        
      }
    } catch (error) {
      console.log("error",error)
    }
  }

  export const getSlots = async (time:string) => {
    try {
      const response = await axios.get(`http://35.178.167.63:8888/slot/get-unbooked-slot/1/${time}`);
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  export const getBookSlot = async (e:any,userId:any) =>{
    try {
      const response = await axios.post(`http://35.178.167.63:8888/slot/bookslot/${e.slotId}/user/${userId}`);
      return response.data
    } catch (error) {
      console.log(error)
    }
  }


  export const CountBySlotsStatusService = async(token:string)=>{
    try {
      const response = await axios.get(
        "/slot/get-analytics/",
        {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      },
      );
  
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

  export const CountByAdminSlotsStatusService = async(id:string,token:string)=>{
    try {
      const response = await axios.get(
        `/slot/get-analytics/${id}`,
        {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      },
      );
  
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }