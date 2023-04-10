export interface IEventValues {
    title?: string;
    instruction?: string;
    meetingLink?: string;
    adminId?: string;
    duration?: string;
    category?: string;
    id?:number,
    date?:string | Date;
    slots?:[{start:string,
        end: string}]
  }


  export interface IOneOnEventValues {
    title?: string;
    instruction?: string;
    meetingLink?: string;
    adminId?: string;
    duration?: string;
    id?:number
   
  }


  export interface IEventValuescreate {
    title: string;
    instruction: string;
    meetingLink: string;
    adminId: string;
    duration: string;
    date:string | Date;
    slotTime:[{startTime:string,
    endTime: string}]
  }