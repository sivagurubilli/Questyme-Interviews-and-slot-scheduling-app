import axios from "axios"

//Get All Events service
export async function GetAllEventsService() {
    try {
       const response = await axios.get("/one-on-one-events");
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

  //post Event service
  export async function PostEventsService(data:any) {
   const { title,
   instruction,
   meetingLink,
   adminId,
    duration,
    category,
    date,
    slots
    } = data

    try {
       const response = await axios.post("/one-on-one-events",{
        title,
        instruction,
        adminId,
        meetingLink,
         duration,
         date,
         category,
      slots
       });
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

  
//getting single event by id
  export async function GetSingleEventsService(id:any) {
     try {
        const response = await axios.get(`/one-on-one-events/${id}`);
       return response.data;
     } catch (error: any) {
       return error.response;
     }
   }

   //edit Event service
   export async function EditEventsService(data:any,id:any) {
    const { title,
        instruction,
        meetingLink,
        adminId,
         duration,
         category,
       slots
         } = data
      
    try {
       const response = await axios.put(`/one-on-one-events/${id}`,{
        title,
        instruction,
        meetingLink,
        adminId,
         duration,
         category,
         slots
       });
       
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }
 
   // Add slots for recurring events
  export async function AddRecurringSlotsService(id:any,days:any) {
    try {
       const response = await axios.patch(`/one-on-one-events/${id}`
       ,{days});
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }


  //Delete Event service 
  export async function DeleteEventSevice(id:any) {
    try {
       const response = await axios.delete(`/one-on-one-events/${id}`);
       console.log(response)
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

   //Delete Event service 
   export async function SetDateForEventSchedule(date:any) {
    const eventId  = localStorage.getItem("eventId")
console.log(date)
    try {
       const response = await axios.delete(`/one-on-one-events/${eventId}/${date}`);
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }


  