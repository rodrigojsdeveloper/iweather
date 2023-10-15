import { IGetWeatherByCity, ITodayProps } from "@/interfaces";
import weathers from "@/utils/weatherIcons";
import getNextDays from "@/utils/getDays";
import api from "./api";

const getWeatherByCity = async ({
  lat,
  lon,
  setIsLoading,
}: IGetWeatherByCity) => {
  setIsLoading(true);

  const { data } = await api.get(
    `forecast?lat=${lat}&lon=${lon}&appid=3d29a3d19ffccad965f9c63d15f593c1`
  );
  const weatherData = data.list[0];
  const { main, weather, wind, pop } = weatherData;
  const weatherDescription = weather[0].description;
  const weatherMain = weather[0].main.toLowerCase();

  const today: ITodayProps = {
    weather: {
      temp: Math.ceil(main.temp),
      temp_min: Math.floor(main.temp_min),
      temp_max: Math.ceil(main.temp_max),
      description: weatherDescription,
      details: weathers[weatherMain],
    },
    details: {
      feels_like: Math.floor(main.feels_like),
      probability: pop * 100,
      wind_speed: wind.speed,
      humidity: main.humidity,
      temp_kf: Math.floor(main.temp_kf),
    },
  };

  const days = getNextDays();
  const daysAdded: string[] = [];
  const nextDays: any[] = [];

  data.list.forEach((item: any) => {
    const day = new Date(item.dt_txt);
    const formattedDate = `${day.getDate().toString().padStart(2, "0")}/${(
      day.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}`;
    const status = item.weather[0].main;

    const details = weathers[status.toLowerCase() ?? "clouds"];

    if (days.includes(formattedDate) && !daysAdded.includes(formattedDate)) {
      daysAdded.push(formattedDate);

      nextDays.push({
        day: new Date(item.dt_txt),
        min: Math.floor(item.main.temp_min),
        max: Math.ceil(item.main.temp_max),
        weather: item.weather[0].description,
        icon: details.icon_day,
      });
    }
  });

  setIsLoading(false);

  return { today, nextDays };
};

export default getWeatherByCity;
