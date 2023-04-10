import axios from "axios"

export const getSlotDays = async (id:any) => {
    try {
      const response = await axios.get(`https://b952-27-116-40-42.in.ngrok.io/slot/get-slot-dates/${id}`);
      if( response.data.dates){
        return  response.data.dates
        
      }
    } catch (error) {
      console.log("error",error)
    }
  }

  export const getSlots = async (time:string) => {
    try {
      const response = await axios.get(`https://b952-27-116-40-42.in.ngrok.io/slot/get-unbooked-slot/1/${time}`);
      console.log(response)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }