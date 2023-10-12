"use client";
import getWeatherByCity from "@/services/getWeatherByCity";
import Forecast from "@/components/Forecast";
import { useEffect, useState } from "react";
import Details from "@/components/Details";
import Search from "@/components/Search";
import Line from "@/components/Line";

export default function Weather() {
  const storedCity = JSON.parse(localStorage.getItem("iWeather: city") ?? "");

  const [weather, setWeather] = useState<any>();

  useEffect(() => {
    const { lat, lon } = storedCity.coord;

    // setWeather(getWeatherByCity({ lat, lon }));
    
    getWeatherByCity({ lat, lon })
  }, [storedCity]);

  return (
    <main className="w-full max-w-1500 flex flex-row justify-between p-5 gap-4 max-lg:flex-col max-lg:p-2">
      <Search />
      <div className="w-full flex flex-col gap-4">
        <Details details={weather} />
        <Line />
        <Forecast weather={weather?.weather} />
      </div>
    </main>
  );
}
