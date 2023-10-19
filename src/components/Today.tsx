import { WeatherContext } from '@/context/weather.context'
import isDaytime from '@/utils/getCurrentTime'
import getCurrentTime from '@/utils/hours'
import getCurrentDate from '@/utils/date'
import { useContext } from 'react'
import Image from 'next/image'

const Today = () => {
  const { city } = useContext(WeatherContext)
  const isDay = isDaytime()

  return (
    <div
      style={{
        backgroundImage: isDay
          ? `url('${city.weatherToday?.details.bg_day.src}')`
          : `url('${city.weatherToday?.details.bg_night.src}')`,
      }}
      className="flex h-586 w-full flex-col justify-between rounded-def bg-cover bg-center bg-no-repeat p-8 max-lg:h-304 max-lg:p-5"
    >
      <div className="flex w-full flex-row justify-between text-gray-100">
        <div className="flex flex-col gap-y-2 max-sm:gap-y-0.5">
          <h1 className="text-heading-md font-bold max-sm:text-heading-sm">
            {city?.name}
          </h1>
          <p className="text-t-md max-sm:text-t-xs">{getCurrentDate()}</p>
        </div>

        <p className="text-t-md font-bold max-sm:text-t-sm">
          {getCurrentTime()}
        </p>
      </div>

      <div className="flex w-full flex-row items-end justify-between">
        <div className="flex flex-col">
          <p className="text-heading-hg font-bold max-sm:text-heading-xl">
            {Math.ceil(city?.main?.temp)}ºc
          </p>

          <div className="flex flex-row items-center gap-x-3 max-sm:flex-col max-sm:items-start">
            <p className="text-heading-md font-bold max-sm:text-heading-sm">
              {Math.floor(city?.main?.temp_min)}ºc /{' '}
              {Math.ceil(city?.main?.temp_max)}ºc
            </p>
            <hr className="h-2 w-2 rounded-full bg-white opacity-40 max-sm:hidden" />
            <p className="text-t-lg max-sm:text-t-sm">
              {city?.weather[0]?.description}
            </p>
          </div>
        </div>

        {isDay ? (
          <Image
            src={city.weatherToday?.details.icon_day.src}
            alt="icon day"
            width={130}
            height={130}
          />
        ) : (
          <Image
            src={city.weatherToday?.details.icon_night.src}
            alt="icon night"
            width={130}
            height={130}
          />
        )}
      </div>
    </div>
  )
}

export default Today
