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
  const { title, instruction, meetingLink, adminId, duration } = data;

  try {
    const response = await axios.post("/one-on-one-events", {
      title,
      instruction,
      adminId,
      meetingLink,
      duration,
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

//post Event service
export async function PostOneOffService(data: any) {
  const { title, instruction, meetingLink, date, slotTime, duration, adminId } =
    data;

  try {
    const response = await fetch(
      "/slot/create-slots",{
      method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}
    );
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
    console.log(response.data);
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
export async function GetSlotsService(date: string) {
  try {
    const response = await axios.post(
      "/auth/users/bulk-createbyCSV",
      date,
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

// get data abot how many interviews compleated and how many pending
export async function CountByMeetingStatusService(id: string, token: string) {
  try {
    const response = await axios.get(
      "/count-by-meeting-status"
    );

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}


 // getting data about particular batch
export async function CountByBatchStatusService(url:any) {
  try {
    const response = await axios.get(
    `/${url}`,
      
    );
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}


 // getting data about particular batch
 export async function GetByPendingStatusService(url:any) {
  try {
    const response = await axios.get(
    "/interviews",
      
    );
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}
