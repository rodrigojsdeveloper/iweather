"use client";
import { CityContext } from "@/context/city.context";
import { ISelectCity } from "@/interfaces";
import { useContext } from "react";
import Input from "./Input";
import City from "./City";

const SelectCity = ({ maxWidth }: ISelectCity) => {
  const { isLoadingInput, setSearch, cities, search } = useContext(CityContext);

  return (
    <div className={`w-full ${maxWidth} relative`}>
      <Input
        isLoading={isLoadingInput}
        onChange={(e) => setSearch(e.target.value)}
        maxWidth={maxWidth}
        value={search}
      />

      <div
        className={`w-full ${maxWidth} absolute shadow-def rounded-def mt-2`}
      >
        {search !== "" &&
          cities.map((city, index) => (
            <City
              key={index}
              city={city}
              index={index}
              cities={cities}
            />
          ))}
      </div>
    </div>
  );
};

export default SelectCity;
