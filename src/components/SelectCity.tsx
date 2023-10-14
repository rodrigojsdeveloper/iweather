"use client";
import getCityByName from "@/services/getCityByName";
import { useState, useEffect } from "react";
import { ISelectCity } from "@/interfaces";
import Input from "./Input";
import City from "./City";

const SelectCity = ({ onSelect }: ISelectCity) => {
  const [cities, setCities] = useState<Array<any>>([]);

  const [search, setSearch] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCities = async (name: string) => {
    setIsLoading(true);

    const res = await getCityByName(name);

    setCities(res);
    setIsLoading(false);
  };

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);
    return () => clearInterval(debounce);
  }, [search]);

  return (
    <>
      <Input
        isLoading={isLoading}
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
