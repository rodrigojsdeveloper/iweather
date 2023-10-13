import { IWeather } from "@/interfaces";
import SubTitle from "./SubTitle";
import NextDay from "./NextDay";

const Forecast = ({ weather }: IWeather) => {
  return (
    <div className="w-full max-w-716 bg-gray-800 p-4 rounded-def max-lg:max-w-none max-lg:p-3">
      <SubTitle title="Previsão para 5 dias" />

      <div className="w-full flex flex-row items-center">
        <NextDay
          day="Seg"
          src={weather?.details}
          max_temp={`${weather?.temp_max}ºC`}
          min_temp={`${weather?.temp_min}ºC`}
        />
        <NextDay
          day="Ter"
          src={weather?.details}
          max_temp={`${weather?.temp_max}ºC`}
          min_temp={`${weather?.temp_min}ºC`}
        />
        <NextDay
          day="Qua"
          src={weather?.details}
          max_temp={`${weather?.temp_max}ºC`}
          min_temp={`${weather?.temp_min}ºC`}
        />
        <NextDay
          day="Qui"
          src={weather?.details}
          max_temp={`${weather?.temp_max}ºC`}
          min_temp={`${weather?.temp_min}ºC`}
        />
        <NextDay
          day="Sex"
          src={weather?.details}
          max_temp={`${weather?.temp_max}ºC`}
          min_temp={`${weather?.temp_min}ºC`}
        />
      </div>
    </div>
  );
};

export default Forecast;
