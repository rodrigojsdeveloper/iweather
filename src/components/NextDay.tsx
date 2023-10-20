import { INextDay } from '@/interfaces'
import Image from 'next/image'

const NextDay = ({ nextDay }: INextDay) => {
  return (
    <div className="flex w-full flex-col items-center gap-y-3 text-center max-sm:gap-y-1">
      <p className="text-heading-xs text-gray-200">
        {nextDay.day.toLocaleDateString('en-US', { weekday: 'short' })}
      </p>

      <Image
        src={nextDay.icon.src}
        alt="weather"
        className="h-67 w-67 object-contain"
        width={nextDay.icon.width}
        height={nextDay.icon.height}
      />

      <div className="flex flex-col items-center gap-y-1 max-sm:gap-0">
        <p className="text-t-sm font-normal text-gray-200 max-sm:hidden">
          {nextDay.status}
        </p>

        <div className="flex flex-row items-center gap-x-2 max-sm:flex-col max-sm:gap-0">
          <p className="text-heading-xs text-gray-100">{nextDay.max}</p>
          <p className="text-heading-xs text-gray-400">{nextDay.min}</p>
        </div>
      </div>
    </div>
  )
}

export default NextDay
