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




  export interface IEventValuescreate {
    title: string;
    instruction: string;
    meetingLink: string;
    adminId: string;
    duration: string;
    category: string;
    date:string | Date;
    slots:[{start:string,
    end: string}]
  }