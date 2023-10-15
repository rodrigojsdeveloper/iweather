import { WeatherContext } from "@/context/weather.context";
import { CityContext } from "@/context/city.context";
import { ICityComponent } from "@/interfaces";
import { useContext } from "react";
import Link from "next/link";

const City = ({ city, index, cities }: ICityComponent) => {
  const { setSearch, setCities } = useContext(CityContext);
  const { handleSelected } = useContext(WeatherContext);

  return (
    <Link href="/weather">
      <div
        className={`w-full h-54 bg-gray-500 py-4 px-5 mb-px text-t-md ${
          index === 0 ? "rounded-t-def" : ""
        } ${
          index === cities.length - 1 ? "rounded-b-def" : ""
        } duration-200 hover:bg-gray-600`}
        onClick={() => {
          handleSelected(city);
          setSearch("");
          setCities([]);
        }}
      >
        {city.name}
      </div>
    </Link>
  );
};

export default City;
