export  async function copyContent(text:string):Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    const res = navigator.clipboard.readText().then((response)=>{
       return response
    })

    
    /* Resolved - text copied to clipboard successfully */
  } catch (err) {
    console.error('Failed to copy: ', err);
    /* Rejected - text failed to copy to the clipboard */
  }
}


export const convertTimeFormat = (scheduledTime:any) => {
    
    const [hours, minutes, seconds] = scheduledTime.split(":");
    const amPm = hours >= 12 ? "PM" : "AM";
    const hou = hours % 12 || 12;
    const fullFormat =
      hou < 10 ? `0${hou}:${minutes} ${amPm}` : `${hou}:${minutes} ${amPm}`;
    return fullFormat;
  };