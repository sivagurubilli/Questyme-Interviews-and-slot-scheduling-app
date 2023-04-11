import axios from "axios";
import { IAddStdents } from "./GetEventsInterface";

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
export async function PostEventsService(data: any) {
  const { title, instruction, meetingLink,  duration } = data;

  try {
    const response = await axios.post("/recurring/createRecMeet", {
      title,
      instruction,
      "adminId":41,
      meetingLink,
      duration,
      "category":"GENERAL"
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

//post Event service
export async function PostOneOffService(data: any,token:string,id:string) {
  const { title, instruction, meetingLink, date, slotTime, duration } =
    data;

  try {
    const response = await axios.post(
      "/slot/create-slots",
      { title, instruction, meetingLink, date, slotTime, duration
,"adminId":id
}, 
      {
    
          headers: {
            Authorization: `Bearer ${token}`,
          },
      
        });
    console.log(response);
    return response;
  } catch (error: any) {
    return error.response;
  }
}

//post Event service
export async function GetDateOneOffService(id: any) {
  try {
    const response = await axios.get(
      `/slot/get-slot-dates/${id}`
    );
    
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

//getting single event by id
export async function GetSingleEventsService(id: any) {
  try {
    const response = await axios.get(`/one-on-one-events/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

//edit Event service
export async function EditEventsService(data: any, id: any) {
  const { title, instruction, meetingLink, adminId, duration } = data;

  try {
    const response = await axios.put(`/one-on-one-events/${id}`, {
      title,
      instruction,
      meetingLink,
      adminId,
      duration,
    });

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

// Add slots for recurring events
export async function AddRecurringSlotsService(id: any, days: any) {
  console.log(days)
  try {
    const response = await axios.patch(`/one-on-one-events/${id}`, { days });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

//Delete Event service
export async function DeleteEventSevice(id: any) {
  try {
    const response = await axios.delete(`/one-on-one-events/${id}`);
    console.log(response);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

//adding single student service
export async function AddStudentService(data: IAddStdents, token: string) {
  const { name, email, password, batch } = data;
  try {
    const response = await axios.post(
      "/auth/users/add/student",
      {
        name,
        email,
        password,
        batch,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

//adding students in bulk servive
export async function AddBulkStudentService(data: any, token: string) {
  try {
    console.log(data);
    const response = await axios.post(
      "csv",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

//service for getting slots for particular date
export async function GetSlotsForDateService(id:string,date: string,token:string) {
  try {
    const response = await axios.get(
      `/slot/get-all-slot/${id}/${date}`,
     
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {


    return error.response;
  }
}


//service for deleting slots 
export async function DeleteSlotsService(id:string,token:string) {
  try {
    const response = await axios.post(
      `/slot/deleteslot/${id}`,
     
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {


    return error.response;
  }
}

// get data abot how many interviews compleated and how many pending
export async function CountByMeetingStatusService(id: string, token: string) {
  try {
    const response = await axios.get(
      "/api/interview/count-by-meeting-status",
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


 // getting data about particular batch
export async function CountByBatchStatusService(batchName:any) {
  try {
    const response = await axios.get(
    `/api/interview/count-by-meeting-status-by-batch?batch=${batchName}`,
      
    );

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}


 // getting data about particular batch
 export async function GetByPendingStatusService(batchName:string|null,meeting:string,token:string) {
  try {
    const response = await axios.get(
    `api/interview/filter?batch=${batchName}&meetingStatus=${meeting}`,
    {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

 // getting category details
 export async function GetCategoryService(token:string) {
  try {
    const response = await axios.get(
      "/api/category",{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}


 // getting category details
 export async function GetRecurringListService(token:string) {
  try {
    const response = await axios.get(
      "/recurring/getList",{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  console.log(response)
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}