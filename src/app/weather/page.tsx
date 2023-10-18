'use client'
import Forecast from '@/components/Forecast'
import Details from '@/components/Details'
import Search from '@/components/Search'

export default function Weather() {
  return (
    <main className="m-auto flex w-full max-w-screen-2xl flex-row justify-between gap-x-6 p-6 max-lg:flex-col max-lg:gap-x-0 max-lg:gap-y-2 max-lg:px-2 max-lg:pb-5 max-lg:pt-2">
      <Search />
      <div className="flex w-full flex-col gap-y-4 max-lg:gap-y-2">
        <Details />
        <Forecast />
      </div>
    </main>
  )
}
