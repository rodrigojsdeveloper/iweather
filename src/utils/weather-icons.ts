import bgClearDay from "@/app/assets/weather-bg/clear-day.svg";
import bgClearNight from "@/app/assets/weather-bg/clear-night.svg";
import bgCloudyDay from "@/app/assets/weather-bg/cloudy-day.svg";
import bgCloudyNight from "@/app/assets/weather-bg/cloudy-night.svg";
import bgFewCloundsDay from "@/app/assets/weather-bg/few-clouds-day.svg";
import bgFewCloundsNight from "@/app/assets/weather-bg/few-clouds-night.svg";
import bgRainDay from "@/app/assets/weather-bg/rain-day.svg";
import bgRainNight from "@/app/assets/weather-bg/rain-night.svg";
import bgStormDay from "@/app/assets/weather-bg/storm-day.svg";
import bgStormNight from "@/app/assets/weather-bg/storm-night.svg";

import iconClearDay from "@/app/assets/weather-icons/clear-day.svg";
import iconClearNight from "@/app/assets/weather-icons/clear-night.svg";
import iconCloudyDay from "@/app/assets/weather-icons/cloudy-day.svg";
import iconCloudyNight from "@/app/assets/weather-icons/cloudy-night.svg";
import iconFewCloundsDay from "@/app/assets/weather-icons/few-clouds-day.svg";
import iconFewCloundsNight from "@/app/assets/weather-icons/few-clouds-night.svg";
import iconRainDay from "@/app/assets/weather-icons/rain-day.svg";
import iconRainNight from "@/app/assets/weather-icons/rain-night.svg";
import iconStormDay from "@/app/assets/weather-icons/storm-day.svg";
import iconStormNight from "@/app/assets/weather-icons/storm-night.svg";
import { IWeatherIcons } from "@/interfaces";

const weathers: IWeatherIcons = {
  clouds: {
    name: "Clouds",
    bg_day: bgCloudyDay,
    bg_night: bgCloudyNight,
    icon_day: iconCloudyDay,
    icon_night: iconCloudyNight,
  },
  rain: {
    name: "Rain",
    bg_day: bgRainDay,
    bg_night: bgRainNight,
    icon_day: iconRainDay,
    icon_night: iconRainNight,
  },
  clear: {
    name: "Clear",
    bg_day: bgClearDay,
    bg_night: bgClearNight,
    icon_day: iconClearDay,
    icon_night: iconClearNight,
  },
  storm: {
    name: "Storm",
    bg_day: bgStormDay,
    bg_night: bgStormNight,
    icon_day: iconStormDay,
    icon_night: iconStormNight,
  },
  few_clounds: {
    name: "Few Clounds",
    bg_day: bgFewCloundsDay,
    bg_night: bgFewCloundsNight,
    icon_day: iconFewCloundsDay,
    icon_night: iconFewCloundsNight,
  },
};

export default weathers;
