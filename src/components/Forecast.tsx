import { IWeather } from "@/interfaces";
import SubTitle from "./SubTitle";
import NextDay from "./NextDay";

const Forecast = ({ weather }: IWeather) => {
  const { details, temp_max, temp_min } = weather;

  return (
    <div className="w-full max-w-716 bg-gray-800 p-4 rounded-def max-lg:max-w-none max-lg:p-3">
      <SubTitle title="Previsão para 5 dias" />

      <div className="w-full flex flex-row items-center">
        <NextDay
          day="Seg"
          src={details}
          max_temp={`${temp_max}ºC`}
          min_temp={`${temp_min}ºC`}
        />
        <NextDay
          day="Ter"
          src={details}
          max_temp={`${temp_max}ºC`}
          min_temp={`${temp_min}ºC`}
        />
        <NextDay
          day="Qua"
          src={details}
          max_temp={`${temp_max}ºC`}
          min_temp={`${temp_min}ºC`}
        />
        <NextDay
          day="Qui"
          src={details}
          max_temp={`${temp_max}ºC`}
          min_temp={`${temp_min}ºC`}
        />
        <NextDay
          day="Sex"
          src={details}
          max_temp={`${temp_max}ºC`}
          min_temp={`${temp_min}ºC`}
        />
      </div>
    </div>
  );
};

export default Forecast;
