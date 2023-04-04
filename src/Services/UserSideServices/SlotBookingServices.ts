import axios from "axios"
import { FormValues } from "./SlotBookingInterface";

export const getSlotDays = async () => {
    try {
      const response = await axios.get("http://localhost:8080/slots");
      if(response.data){
        return response.data
      }
    } catch (error) {
      console.log(error)
    }
  }

  export const getSlots = async () => {
    try {
      const response = await axios.get("http://localhost:8080/slotstesting");
      if(response.data){
        return response.data[1]
      }
    } catch (error) {
      console.log(error)
    }
  }

  export const BookSlot = async (formValues:FormValues) => {
    try {
      const response = await axios.post("http://localhost:8080/schedules", { formValues });
      return response
    } catch (error) {
      console.log(error)
    }
  }
  