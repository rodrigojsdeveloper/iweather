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
      } max-sm:h-166`}
    >
      {!isLoading ? (
        <>
          <SubTitle title="5 day forecast" />

          <div className="w-full flex flex-row items-center">
            {nextDays.length > 0
              ? nextDays.map((day, key) => (
                  <NextDay
                    key={key}
                    day={day?.day}
                    src={day?.icon?.src}
                    max_temp={`${day?.max}ºC`}
                    min_temp={`${day?.min}ºC`}
                    width={120}
                    height={120}
                  />
                ))
              : (<div>TESTE: o array de previsões está vindo vazio</div>)}
          </div>
        </>
      ) : (<div>TESTE: o component Previsão não está sendo carregado</div>)}
    </div>
  );
};

export default Forecast;
