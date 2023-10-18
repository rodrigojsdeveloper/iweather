'use client'
import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { ICityProps, ITodayProps, IWeatherContextData } from '../interfaces'
import getWeatherByCity from '@/services/getWeatherByCity'
import { useRouter, usePathname } from 'next/navigation'

const WeatherContext = createContext({} as IWeatherContextData)

const WeatherContextProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const pathname = usePathname()
  const isBrowser = typeof window !== 'undefined'
  const cityFromLocalStorage = isBrowser
    ? localStorage.getItem('iWeather: city')
    : null

  const [weather, setWeather] = useState<ITodayProps>({} as ITodayProps)

  const [city, setCity] = useState<any>(
    isBrowser && cityFromLocalStorage ? JSON.parse(cityFromLocalStorage) : null,
  )

  const [nextDays, setNextDays] = useState<any[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleSelected = (selectedCity: ICityProps) => {
    localStorage.setItem('iWeather: city', JSON.stringify(selectedCity))
    setCity(selectedCity)
    if (pathname !== '/weather') router.push('/weather')
  }

  const fetchWeatherData = async (lat: number, lon: number) => {
    try {
      const weatherData = await getWeatherByCity({ lat, lon, setIsLoading })
      setWeather(weatherData.today)
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
    weather,
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
