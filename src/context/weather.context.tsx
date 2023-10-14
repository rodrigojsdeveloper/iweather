"use client";
import { IChildren, IWeatherContextData } from "../interfaces";
import { createContext } from "react";

const WeatherContext = createContext({} as IWeatherContextData);

const WeatherContextProvider = ({ children }: IChildren) => {
  return (
    <WeatherContext.Provider value={{}}>{children}</WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
