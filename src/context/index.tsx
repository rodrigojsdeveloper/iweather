import { WeatherContextProvider } from "./weather.context";
import { CityContextProvider } from "./city.context";
import { IChildren } from "../interfaces";

const Providers = ({ children }: IChildren) => {
  return (
    <CityContextProvider>
      <WeatherContextProvider>{children}</WeatherContextProvider>
    </CityContextProvider>
  );
};

export { Providers };
