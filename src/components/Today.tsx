import getCurrentTime from "@/utils/hours";
import getCurrentDate from "@/utils/date";
import { ICity } from "@/interfaces";
import Image from "next/image";

const Today = ({ city }: ICity) => {
  return (
    <div
      className={`${
        getCurrentTime().split(" ")[1] === "AM"
          ? `bg-[${city?.weatherToday?.details?.bg_day.src}]`
          : `bg-[${city?.weatherToday?.details?.bg_night.src}]`
      } bg-cover bg-center bg-no-repeat w-full h-583 flex flex-col justify-between rounded-def p-8 max-lg:h-304 max-lg:p-5`}
    >
      <div className="w-full flex flex-row justify-between max-sm:flex-col">
        <div className="flex flex-col text-gray-100">
          <h1 className="text-heading-lg max-lg:text-heading-md">
            {city?.name}
          </h1>
          <p className="text-t-sm max-lg:text-t-xs">{getCurrentDate()}</p>
        </div>

        <p className="text-t-md max-lg:text-t-sm max-sm:mt-1">
          {getCurrentTime()}
        </p>
      </div>

      <div className="w-full flex flex-row justify-between items-end">
        <div className="flex flex-col">
          <p className="text-heading-hg max-lg:text-heading-xl">
            {Math.ceil(city?.main?.temp)}ºc
          </p>

          <div className="flex flex-row items-center max-lg:flex-col max-lg:items-start">
            <p className="text-heading-md max-lg:text-heading-sm">
              {Math.floor(city?.main?.temp_min)}ºc /{" "}
              {Math.ceil(city?.main?.temp_max)}ºc
            </p>
            <hr className="w-2 h-2 rounded-full bg-white opacity-40 mx-2 max-lg:hidden" />
            <p className="text-heading-md max-lg:text-heading-sm">
              {city?.weather[0]?.description}
            </p>
          </div>
        </div>

        {getCurrentTime().split(" ")[1] === "AM" ? (
          <Image
            src={city?.weatherToday?.details?.icon_day.src}
            alt="icon day"
            width={50}
            height={50}
          />
        ) : (
          <Image
            src={city?.weatherToday?.details?.icon_night.src}
            alt="icon night"
            width={150}
            height={150}
          />
        )}
      </div>
    </div>
  );
};

export default Today;
