import weathers from "@/utils/weather-icons";
import NextDay from "./NextDay";
import SubTitle from "./SubTitle";

const Forecast = () => {
  return (
    <div className="w-full max-w-716 bg-gray-800 p-4 rounded-def max-lg:max-w-none max-lg:p-3">
      <SubTitle title="Previsão para 5 dias" />

      <div className="w-full flex flex-row items-center">
        <NextDay day="Seg" src={weathers[5]} max_temp="32ºC" min_temp="26ºC" />
        <NextDay day="Ter" src={weathers[6]} max_temp="32ºC" min_temp="26ºC" />
        <NextDay day="Qua" src={weathers[7]} max_temp="32ºC" min_temp="26ºC" />
        <NextDay day="Qui" src={weathers[8]} max_temp="32ºC" min_temp="26ºC" />
        <NextDay day="Sex" src={weathers[9]} max_temp="32ºC" min_temp="26ºC" />
      </div>
    </div>
  );
};

export default Forecast;
