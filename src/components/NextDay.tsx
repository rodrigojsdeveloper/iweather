import { INextDay } from "@/interfaces";
import Image from "next/image";

const NextDay = ({ day, src, max_temp, min_temp, width, height }: INextDay) => {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <p className="text-t-sm text-gray-200 mb-1 max-lg:text-t-xs">{day}</p>

      <Image
        src={src}
        alt="weather"
        className="w-20 h-20 object-contain"
        width={width}
        height={height}
      />

      <div className="flex flex-col items-center gap-2 max-lg:flex-col">
        <p className="text-t-sm text-gray-100 max-lg:text-t-xs">{max_temp}</p>
        <p className="text-t-sm text-gray-400 max-lg:text-t-xs">{min_temp}</p>
      </div>
    </div>
  );
};

export default NextDay;
