import { WEATHER_API_URL, WEATHER_API_KEY } from '@/config/api';

import { type WeatherType } from '@/types/weather';

export const getCurrentWeather = async (city: string): Promise<WeatherType> => {
  const url = `${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=${city}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
