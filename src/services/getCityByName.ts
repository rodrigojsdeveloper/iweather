import api from "./api";

const getCityByName = async (name: string) => {
  try {
    const { data } = await api.get(
      `weather?q=${name}&appid=3d29a3d19ffccad965f9c63d15f593c1`
    );

    const city = {
      id: data.id,
      name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    };

    return [city];
  } catch (error) {
    return [];
  }
};

export default getCityByName;
