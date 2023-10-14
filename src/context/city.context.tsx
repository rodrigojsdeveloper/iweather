"use client";
import { IChildren, ICityProps, ICityContextData } from "../interfaces";
import { createContext, useEffect, useState } from "react";
import getCityByName from "@/services/getCityByName";
import { useRouter } from "next/navigation";

const CityContext = createContext({} as ICityContextData);

const CityContextProvider = ({ children }: IChildren) => {
  const router = useRouter();

  const [cities, setCities] = useState<Array<ICityProps>>([]);

  const [search, setSearch] = useState<string>("");

  const [isLoadingInput, setIsLoadingInput] = useState<boolean>(false);

  const getCities = async (name: string) => {
    setIsLoadingInput(true);

    const res = await getCityByName(name);

    setCities(res);
    setIsLoadingInput(false);
  };

  const handleSelected = (city: ICityProps) => {
    localStorage.setItem("iWeather: city", JSON.stringify(city));
    router.push("/weather");
  };

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);
    return () => clearInterval(debounce);
  }, [search]);

  return (
    <CityContext.Provider
      value={{
        isLoadingInput,
        setSearch,
        cities,
        handleSelected,
        search,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export { CityContext, CityContextProvider };
