"use client";
import { IChildren, ICityProps, IWeatherContextData } from "../interfaces";
import { createContext, useEffect, useState } from "react";
import getWeatherByCity from "@/services/getWeatherByCity";
import { useRouter, usePathname } from "next/navigation";

const WeatherContext = createContext({} as IWeatherContextData);

const WeatherContextProvider = ({ children }: IChildren) => {
  const router = useRouter();

  const pathname = usePathname();

  const isBrowser = typeof window !== "undefined";

  const cityFromLocalStorage = isBrowser
    ? localStorage.getItem("iWeather: city")
    : null;

  const [weather, setWeather] = useState<any>();

  const [city, setCity] = useState<any>(
    isBrowser && cityFromLocalStorage ? JSON.parse(cityFromLocalStorage) : null
  );

  const [nextDays, setNextDays] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSelected = (city: ICityProps) => {
    localStorage.setItem("iWeather: city", JSON.stringify(city));
    setCity(city);
    if (!(pathname === "/weather")) router.push("/weather");
  };

  const fetchWeatherData = async (lat: number, lon: number) => {
    try {
      const weatherData = await getWeatherByCity({ lat, lon, setIsLoading });
      setWeather(weatherData.today);
      setCity((prevCity: any) => ({
        ...prevCity,
        weatherToday: weatherData?.today?.weather,
      }));
      setNextDays(weatherData.nextDays);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (cityFromLocalStorage) {
      fetchWeatherData(city?.coord?.lat, city?.coord?.lon);
    }
  }, [city?.coord, cityFromLocalStorage]);

  return (
    <WeatherContext.Provider
      value={{
        city,
        weather,
        nextDays,
        isLoading,
        handleSelected,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
