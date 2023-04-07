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