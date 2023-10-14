"use client";
import Forecast from "@/components/Forecast";
import Details from "@/components/Details";
import Search from "@/components/Search";
import Line from "@/components/Line";

export default function Weather() {
  return (
    <main className="w-full max-w-1500 flex flex-row justify-between p-5 m-auto gap-4 max-lg:flex-col max-lg:p-2">
      <Search />
      <div className="w-full flex flex-col gap-4">
        <Details />
        <Line />
        <Forecast />
      </div>
    </main>
  );
}
