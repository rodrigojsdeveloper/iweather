import { WeatherContextProvider } from './weather.context'
import { CityContextProvider } from './city.context'
import { PropsWithChildren } from 'react'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <CityContextProvider>
      <WeatherContextProvider>{children}</WeatherContextProvider>
    </CityContextProvider>
  )
}

export default Providers
