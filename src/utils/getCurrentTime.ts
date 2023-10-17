import getCurrentTime from "./hours";

const isDaytime = () => {
  const [hour, period] = getCurrentTime().split(" ");
  const currentHour = parseInt(hour);

  return period === "AM" || (currentHour >= 6 && currentHour < 18);
};

export default isDaytime;
