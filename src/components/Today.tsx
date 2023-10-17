import isDaytime from "@/utils/getCurrentTime";
import getCurrentTime from "@/utils/hours";
import getCurrentDate from "@/utils/date";
import { ICity } from "@/interfaces";
import Image from "next/image";

const Today = ({ city }: ICity) => {
  const isDay = isDaytime();

  return (
    <div
      style={{
        backgroundImage: isDay
          ? `url('${city?.weatherToday?.details?.bg_day.src}')`
          : `url('${city?.weatherToday?.details?.bg_night.src}')`,
      }}
      className="bg-cover bg-center bg-no-repeat w-full h-586 flex flex-col justify-between rounded-def p-8 max-lg:h-304 max-lg:p-5"
    >
      <div className="w-full flex flex-row justify-between text-gray-100">
        <div className="flex flex-col gap-y-2 max-sm:gap-y-0.5">
          <h1 className="font-bold text-heading-md max-sm:text-heading-sm">
            {city?.name}
          </h1>
          <p className="text-t-md max-sm:text-t-xs">{getCurrentDate()}</p>
        </div>

        <p className="font-bold text-t-md max-sm:text-t-sm">
          {getCurrentTime()}
        </p>
      </div>

      <div className="w-full flex flex-row justify-between items-end">
        <div className="flex flex-col">
          <p className="font-bold text-heading-hg max-sm:text-heading-xl">
            {Math.ceil(city?.main?.temp)}ºc
          </p>

          <div className="flex flex-row items-center gap-x-3 max-sm:flex-col max-sm:items-start">
            <p className="font-bold text-heading-md max-sm:text-heading-sm">
              {Math.floor(city?.main?.temp_min)}ºc /{" "}
              {Math.ceil(city?.main?.temp_max)}ºc
            </p>
            <hr className="w-2 h-2 rounded-full bg-white opacity-40 max-sm:hidden" />
            <p className="text-t-lg max-sm:text-t-sm">
              {city?.weather[0]?.description}
            </p>
          </div>
        </div>

        {isDay ? (
          <Image
            src={city?.weatherToday?.details?.icon_day.src}
            alt="icon day"
            width={130}
            height={130}
          />
        ) : (
          <Image
            src={city?.weatherToday?.details?.icon_night.src}
            alt="icon night"
            width={130}
            height={130}
          />
        )}
      </div>
    </div>
  );
};

export default Today;
