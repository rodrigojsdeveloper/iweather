import { WeatherContext } from '@/context/weather.context'
import { useContext } from 'react'
import SubTitle from './SubTitle'
import NextDay from './NextDay'

const Forecast = () => {
  const { isLoading, nextDays } = useContext(WeatherContext)

  return (
    <div
      className={`h-276 w-full rounded-def bg-gray-800 px-6 pb-6 pt-7 ${
        isLoading ? 'animate-pulse' : ''
      } max-lg:p-3 max-sm:h-176`}
    >
      {!isLoading ? (
        <>
          <SubTitle title="5 day forecast" />

          <div className="flex w-full flex-row font-bold">
            {nextDays.length > 0
              ? nextDays.map((day, key) => (
                  <NextDay
                    key={key}
                    day={day?.day}
                    src={day?.icon?.src}
                    status={day?.status}
                    max={`${day?.max}ºC`}
                    min={`${day?.min}ºC`}
                    width={67}
                    height={67}
                  />
                ))
              : null}
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Forecast
