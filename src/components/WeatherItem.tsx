import { IWeatherItem } from '@/interfaces'

const WeatherItem = ({ icon, title, value }: IWeatherItem) => {
  return (
    <div className="flex h-64 w-full flex-row items-center justify-between max-sm:h-56">
      <div className="flex flex-row items-center gap-x-3">
        {icon}

        <p className="text-heading-xs text-gray-200">{title}</p>
      </div>

      <p className="text-heading-xs text-gray-100">{value}</p>
    </div>
  )
}

export default WeatherItem
