export const convertTo24Hour = (time: string) => {
    const [hour, minute] = time.split(":");
    const period = time.slice(-2);
    let hour24 = parseInt(hour);
    if (hour24 === 12) {
      hour24 = 0;
    }
    if (period === "pm") {
      hour24 += 12;
    }
    return `${hour24.toString().padStart(2, "0")}:${minute}`;
  };