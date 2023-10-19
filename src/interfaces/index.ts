import { Dispatch, SetStateAction } from 'react'

export interface IconProps {
  blurHeight: number
  blurWidth: number
  height: number
  src: string
  width: number
}

export interface IDetailsProps {
  bg_day: IconProps
  bg_night: IconProps
  icon_day: IconProps
  icon_night: IconProps
  name: string
}
export interface IWeatherProps {
  description: string
  icon: string
  id: number
  main: string
}

export interface ITodayWeatherProps {
  temp: number
  temp_max: number
  temp_min: number
  description: string
  details: IDetailsProps
}

export interface InputProps {
  isLoading: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  maxWidth?: 'max-w-431'
  value?: string | number | readonly string[]
}

export interface IWeatherItem {
  icon: React.ReactNode
  title: string
  value?: string
}

export interface ISubTitle {
  title: string
}

export interface ICityProps {
  coord: {
    lon: number
    lat: number
  }
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    },
  ]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
  weatherToday: ITodayWeatherProps
}

export interface IsLoadingProps {
  isLoading?: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export interface IGetWeatherByCity extends IsLoadingProps {
  lat: number
  lon: number
}

export interface ISelectCity {
  maxWidth?: 'max-w-431'
}

export interface IWeatherIcons {
  [key: string]: IDetailsProps
}

export interface ICityComponent {
  city: ICityProps
  index: number
  cities: Array<ICityProps>
}

export interface ICityContextData {
  isLoadingInput: boolean
  setSearch: Dispatch<SetStateAction<string>>
  cities: Array<ICityProps>
  search: string
  setCities: Dispatch<SetStateAction<Array<ICityProps>>>
}

export interface IMain {
  feels_like: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_kf: number
  temp_max: number
  temp_min: number
}

export interface ITodayDetailsProps {
  feels_like: number
  probability: number
  wind_speed: number
  humidity: number
  temp_kf: number
}

export interface IForecast {
  clouds: { all: number }
  dt: number
  dt_txt: string
  main: IMain
  pop: number
  sys: { pod: string }
  visibility: number
  weather: Array<IWeatherProps>
  wind: { speed: number; deg: number; gust: number }
}

export interface IWeather {
  weather: IWeatherProps
}

export interface IDetails extends IsLoadingProps {
  details: IDetailsProps
}

export interface ITodayProps {
  weather: ITodayWeatherProps
  details: ITodayDetailsProps
}

export interface INextDayProps {
  day: Date
  status: string
  max: number
  min: number
  icon: IconProps
  weather: string
}

export interface INextDay {
  nextDay: INextDayProps
}

export interface IWeatherContextData {
  isLoading: boolean
  nextDays: Array<INextDayProps>
  today: ITodayDetailsProps
  city: ICityProps
  handleSelected: (city: ICityProps) => void
}
