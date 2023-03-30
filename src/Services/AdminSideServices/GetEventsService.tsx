import axios from "axios"


export async function GetAllEventsService() {
    try {
       const response = await axios.get("/one-on-one-events");

      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

  export async function PostEventsService(data:any) {
   const { title,
   instruction,
   meetingLink,
   adminId,
    duration,
    category,
    } = data

    try {
       const response = await axios.post("/one-on-one-events",{
        title,
        instruction,
        adminId,
        meetingLink,
         duration,
         category,
       });
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

  

  export async function GetSingleEventsService(id:any) {
     try {
        const response = await axios.get(`/one-on-one-events/${id}`);
       return response.data;
     } catch (error: any) {
       return error.response;
     }
   }

   export async function EditEventsService(data:any,id:any) {
    const { title,
        instruction,
        meetingLink,
        adminId,
         duration,
         category,
         } = data
      
    try {
       const response = await axios.put(`/one-on-one-events/${id}`,{
        title,
        instruction,
        meetingLink,
        adminId,
         duration,
         category
       });
       
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }
 
   
  export async function AddRecurringSlotsService(id:any,days:any) {
    try {
       const response = await axios.patch(`/one-on-one-events/${id}`
       ,{days});
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }


  export async function DeleteEventSevice(id:any) {
    try {
       const response = await axios.delete(`/one-on-one-events/${id}`);
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }