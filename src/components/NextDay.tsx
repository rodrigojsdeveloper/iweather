import { INextDay } from "@/interfaces";
import Image from "next/image";

const NextDay = ({ day, src, status, max, min, width, height }: INextDay) => {
  const currentDate = new Date(day);

  return (
    <div className="w-full flex flex-col items-center text-center gap-y-3 max-sm:gap-y-1">
      <p className="text-heading-xs text-gray-200">
        {currentDate.toLocaleDateString("en-US", { weekday: "short" })}
      </p>

      <Image
        src={src}
        alt="weather"
        className="w-67 h-67 object-contain"
        width={width}
        height={height}
      />

      <div className="flex flex-col items-center gap-y-1 max-sm:gap-0">
        <p className="font-normal text-t-sm text-gray-200 max-sm:hidden">
          {status}
        </p>

        <div className="flex flex-row items-center gap-x-2 max-sm:flex-col max-sm:gap-0">
          <p className="text-heading-xs text-gray-100">{max}</p>
          <p className="text-heading-xs text-gray-400">{min}</p>
        </div>
      </div>
    </div>
  );
};

export default NextDay;
