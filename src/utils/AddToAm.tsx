export function convertTo24Hour(timeString: string): string {
  if (!timeString) {
    return "";
  }

  let hours = Number(timeString.split(":")[0]);
  const minutes = Number(timeString.split(":")[1]);

  if (timeString.toLowerCase().indexOf("pm") >= 0 && hours < 12) {
    hours += 12;
  }
  if (timeString.toLowerCase().indexOf("am") >= 0 && hours === 12) {
    hours -= 12;
  }

  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${formattedHours}:${formattedMinutes}`;
}
