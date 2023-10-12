"use client";
import getCityByName from "@/services/getCityByName";
import { useState, useEffect } from "react";
import Input from "./Input";

const SelectCity = () => {
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
      />

      <div className="w-full max-w-448 shadow-def rounded-def mt-2">
        {cities.length > 0
          ? cities.map((city, index) => (
              <div
                className={`w-full h-54 bg-gray-500 py-4 px-5 mb-px text-t-md ${
                  index === 0 ? "rounded-t-def" : ""
                } ${index === cities.length - 1 ? "rounded-b-def" : ""}`}
                key={city.id}
              >
                {city.name}
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default SelectCity;
