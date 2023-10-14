import { IWeatherItem } from "@/interfaces";

const WeatherItem = ({ icon, title, value }: IWeatherItem) => {
  return (
    <div className="w-full h-56 flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2.5">
        {icon}

        <p className="text-t-sm text-gray-200 max-sm:text-t-xs">{title}</p>
      </div>

      <p className="text-t-sm text-gray-100 max-sm:text-t-xs">{value}</p>
    </div>
  );
};

export default WeatherItem;
