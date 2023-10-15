import { WeatherContext } from "@/context/weather.context";
import { useContext } from "react";
import SubTitle from "./SubTitle";
import NextDay from "./NextDay";

const Forecast = () => {
  const { isLoading, nextDays } = useContext(WeatherContext);

  return (
    <div
      className={`w-full h-276 bg-gray-800 pt-7 pb-6 px-6 rounded-def ${
        isLoading ? "animate-pulse" : ""
      } max-sm:h-176 max-lg:p-3`}
    >
      {!isLoading ? (
        <>
          <SubTitle title="5 day forecast" />

          <div className="w-full flex flex-row font-bold">
            {nextDays.length > 0
              ? nextDays.map((day, key) => (
                  <NextDay
                    key={key}
                    day={day?.day}
                    src={day?.icon?.src}
                    status={day?.status}
                    max_temp={`${day?.max}ºC`}
                    min_temp={`${day?.min}ºC`}
                    width={67}
                    height={67}
                  />
                ))
              : null}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Forecast;
