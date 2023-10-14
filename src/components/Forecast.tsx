import { WeatherContext } from "@/context/weather.context";
import { useContext } from "react";
import SubTitle from "./SubTitle";
import NextDay from "./NextDay";

const Forecast = () => {
  const { isLoading, nextDays } = useContext(WeatherContext);

  return (
    <div
      className={`w-full h-220 bg-gray-800 p-4 rounded-def max-lg:p-3 ${
        isLoading ? "animate-pulse" : ""
      } max-sm:h-180`}
    >
      {!isLoading ? (
        <>
          <SubTitle title="Previsão para 5 dias" />

          <div className="w-full flex flex-row items-center">
            <NextDay
              key={0}
              day={nextDays[0]?.day}
              src={nextDays[0]?.icon?.src}
              max_temp={`${nextDays[0]?.max}ºC`}
              min_temp={`${nextDays[0]?.min}ºC`}
              width={120}
              height={120}
            />
            <NextDay
              key={1}
              day={nextDays[1]?.day}
              src={nextDays[1]?.icon?.src}
              max_temp={`${nextDays[1]?.max}ºC`}
              min_temp={`${nextDays[1]?.min}ºC`}
              width={120}
              height={120}
            />
            <NextDay
              key={2}
              day={nextDays[2]?.day}
              src={nextDays[2]?.icon?.src}
              max_temp={`${nextDays[2]?.max}ºC`}
              min_temp={`${nextDays[2]?.min}ºC`}
              width={120}
              height={120}
            />
            <NextDay
              key={3}
              day={nextDays[3]?.day}
              src={nextDays[3]?.icon?.src}
              max_temp={`${nextDays[3]?.max}ºC`}
              min_temp={`${nextDays[3]?.min}ºC`}
              width={120}
              height={120}
            />
            <NextDay
              key={4}
              day={nextDays[4]?.day}
              src={nextDays[4]?.icon?.src}
              max_temp={`${nextDays[4]?.max}ºC`}
              min_temp={`${nextDays[4]?.min}ºC`}
              width={120}
              height={120}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Forecast;
