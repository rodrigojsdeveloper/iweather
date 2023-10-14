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
  width: any;
  height: any;
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
  weatherToday?: any;
}

export interface IsLoading {
  isLoading?: boolean;
  setIsLoading?: any;
}

export interface ICity extends IsLoading {
  city: ICityProps;
}

export interface IGetWeatherByCity extends IsLoading {
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

export interface IDetails extends IsLoading {
  details: IDetailsProps;
}

export interface ITodayProps {
  weather: IWeatherProps;
  details: IDetailsProps;
}

export interface IWeatherIcons {
  [key: string]: any;
}

export interface INextDays extends IsLoading {
  nextDays: any[];
}

export interface IFetch {
  today: ITodayProps;
  nextDays: INextDay[];
}
