export interface InputProps {
  isLoading: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  maxWidth?: "max-w-448";
}

export interface IWeatherItem {
  icon: any;
  title: string;
  value: string;
}

export interface ISubTitle {
  title: string;
}

export interface INextDay {
  day: string;
  src: string;
  max_temp: string;
  min_temp: string;
}

export interface ICityProps {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ICity {
  city: ICityProps;
}

export interface IGetWeatherByCity {
  lat: number;
  lon: number;
}

export interface ISelectCity {
  onSelect: any;
}

export interface IWeatherProps {
  temp: number;
  temp_min: number;
  temp_max: number;
  description: string;
  details: any;
}

export interface IDetailsProps {
  feels_like: number;
  probability: number;
  wind_speed: number;
  humidity: number;
  temp_kf: number;
}

export interface IWeather {
  weather: IWeatherProps;
}

export interface IDetails {
  details: IDetailsProps;
}

export interface ITodayProps {
  weather: IWeatherProps;
  details: IDetailsProps;
}
