import { INextDays } from "@/interfaces";
import SubTitle from "./SubTitle";
import NextDay from "./NextDay";

const Forecast = ({ nextDays }: INextDays) => {
  return (
    <div className="w-full bg-gray-800 p-4 rounded-def max-lg:p-3">
      <SubTitle title="Previsão para 5 dias" />

      <div className="w-full flex flex-row items-center">
        {nextDays.map((day, key) => (
          <NextDay
            key={key}
            day={day.day.toLocaleDateString("en-US", { weekday: "short" })}
            src={day.icon?.src}
            max_temp={`${day?.max}ºC`}
            min_temp={`${day?.min}ºC`}
            width={150}
            height={150}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
