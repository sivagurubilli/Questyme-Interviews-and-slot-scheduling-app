import axios from "axios"

export const getSlotDays = async () => {
    try {
      const response = await axios.get("https://48c6-103-200-85-189.in.ngrok.io/slot/get-slot-dates/1");
      if( response.data.dates){
        return  response.data.dates
        
      }
    } catch (error) {
      console.log("error",error)
    }
  }

  export const getSlots = async (time:string) => {
    try {
      const response = await axios.get(`https://48c6-103-200-85-189.in.ngrok.io/slot/get-unbooked-slot/1/${time}`);
      return response.data
    } catch (error) {
      console.log(error)
    }
  }