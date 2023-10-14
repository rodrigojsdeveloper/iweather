import { ICityComponent } from "@/interfaces";
import Link from "next/link";

const City = ({ city, index, cities, onSelect }: ICityComponent) => {
  return (
    <Link href="/weather">
      <div
        className={`w-full h-54 bg-gray-500 py-4 px-5 mb-px text-t-md ${
          index === 0 ? "rounded-t-def" : ""
        } ${index === cities.length - 1 ? "rounded-b-def" : ""}`}
        onClick={() => onSelect(city)}
      >
        {city.name}
      </div>
    </Link>
  );
};

export default City;
