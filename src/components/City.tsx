import { ICityComponent } from "@/interfaces";
import Link from "next/link";

const City = ({ city, index, cities, onSelect, setSearch }: ICityComponent) => {
  return (
    <Link href="/weather">
      <div
        className={`w-full h-54 bg-gray-500 py-4 px-5 mb-px text-t-md ${
          index === 0 ? "rounded-t-def" : ""
        } ${
          index === cities.length - 1 ? "rounded-b-def" : ""
        } duration-500 hover:bg-gray-600`}
        onClick={() => {
          onSelect(city);
          setSearch("");
        }}
      >
        {city.name}
      </div>
    </Link>
  );
};

export default City;
