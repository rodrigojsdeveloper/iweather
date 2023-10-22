'use client'
import { createContext, useEffect, useState, PropsWithChildren } from 'react'
import { ICityProps, ICityContextData } from '../interfaces'
import getCityByName from '@/services/getCityByName'

const CityContext = createContext({} as ICityContextData)

const CityContextProvider = ({ children }: PropsWithChildren) => {
  const [cities, setCities] = useState<ICityProps[]>([])

  const [search, setSearch] = useState<string>('')

  const [isLoadingInput, setIsLoadingInput] = useState<boolean>(false)

  const fetchCities = async (name: string) => {
    setIsLoadingInput(true)

    const fetchedCities = await getCityByName(name)

    setCities(fetchedCities)
    setIsLoadingInput(false)
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return
    }

    const debounce = setTimeout(() => fetchCities(search), 500)
    return () => clearInterval(debounce)
  }, [search])

  const cityContextData: ICityContextData = {
    isLoadingInput,
    setSearch,
    cities,
    search,
    setCities,
  }

  return (
    <CityContext.Provider value={cityContextData}>
      {children}
    </CityContext.Provider>
  )
}

export { CityContext, CityContextProvider }
