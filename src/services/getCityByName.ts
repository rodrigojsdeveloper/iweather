import api from './api'

const getCityByName = async (name: string) => {
  try {
    const { data } = await api.get(
      `weather?q=${name}&appid=3d29a3d19ffccad965f9c63d15f593c1`,
    )

    return [data]
  } catch (error) {
    return []
  }
}

export default getCityByName
