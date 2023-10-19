'use client'
import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import getWeatherByCity from '@/services/getWeatherByCity'
import { useRouter, usePathname } from 'next/navigation'
import {
  ICityProps,
  INextDayProps,
  ITodayDetailsProps,
  IWeatherContextData,
} from '../interfaces'

const WeatherContext = createContext({} as IWeatherContextData)

const WeatherContextProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const pathname = usePathname()
  const isBrowser = typeof window !== 'undefined'
  const cityFromLocalStorage = isBrowser
    ? localStorage.getItem('iWeather: city')
    : null

  const [today, setToday] = useState<ITodayDetailsProps>(
    {} as ITodayDetailsProps,
  )

  const [city, setCity] = useState<ICityProps>(
    isBrowser && cityFromLocalStorage ? JSON.parse(cityFromLocalStorage) : null,
  )

  const [nextDays, setNextDays] = useState<Array<INextDayProps>>([])

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleSelected = (selectedCity: ICityProps) => {
    localStorage.setItem('iWeather: city', JSON.stringify(selectedCity))
    setCity(selectedCity)
    if (pathname !== '/weather') router.push('/weather')
  }

  const fetchWeatherData = async (lat: number, lon: number) => {
    try {
      const weatherData = await getWeatherByCity({ lat, lon, setIsLoading })
      setToday(weatherData.today.details)
      setCity((prevCity: ICityProps) => ({
        ...prevCity,
        weatherToday: weatherData?.today?.weather,
      }))
      setNextDays(weatherData.nextDays)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (cityFromLocalStorage) {
      fetchWeatherData(city?.coord?.lat, city?.coord?.lon)
    }
  }, [city?.coord, cityFromLocalStorage])

  const weatherContextData: IWeatherContextData = {
    city,
    today,
    nextDays,
    isLoading,
    handleSelected,
  }

  return (
    <WeatherContext.Provider value={weatherContextData}>
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherContext, WeatherContextProvider }
