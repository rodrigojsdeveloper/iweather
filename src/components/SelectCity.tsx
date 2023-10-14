"use client";
import { CityContext } from "@/context/city.context";
import { ISelectCity } from "@/interfaces";
import { useContext } from "react";
import Input from "./Input";
import City from "./City";

const SelectCity = ({ onSelect }: ISelectCity) => {
  const { isLoadingInput, setSearch, cities } = useContext(CityContext);

  return (
    <>
      <Input
        isLoading={isLoadingInput}
        onChange={(e) => setSearch(e.target.value)}
        maxWidth="max-w-448"
      />

      <div className="w-full max-w-448 shadow-def rounded-def mt-2">
        {cities.length > 0 &&
          cities.map((city, index) => (
            <City
              key={index}
              city={city}
              index={index}
              cities={cities}
              onSelect={onSelect}
            />
          ))}
      </div>
    </>
  );
};

export default SelectCity;
