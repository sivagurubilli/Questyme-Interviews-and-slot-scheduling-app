


export const convertTimeFormat = (scheduledTime:any) => {
    
    const [hours, minutes, seconds] = scheduledTime.split(":");
    const amPm = hours > 12 ? "PM" : "AM";
    const hou = hours % 12 || 12;
    const fullFormat =
      hou < 10 ? `0${hou}:${minutes} ${amPm}` : `${hou}:${minutes} ${amPm}`;
    return fullFormat;
  };