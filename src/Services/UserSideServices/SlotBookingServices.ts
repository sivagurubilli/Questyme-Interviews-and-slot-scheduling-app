import axios from "axios"

export const getSlotDays = async (id:any) => {
    try {
      const response = await axios.get(`https://88ca-27-116-40-89.in.ngrok.io/slot/get-slot-dates/${id}`);
      if( response.data.dates){
        return  response.data.dates
        
      }
    } catch (error) {
      console.log("error",error)
    }
  }

  export const getSlots = async (time:string) => {
    try {
      const response = await axios.get(`https://88ca-27-116-40-89.in.ngrok.io/slot/get-unbooked-slot/1/${time}`);
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