import { WEATHER_API_KEY, WEATHER_API_URL } from '@/config/api';

import { ForecastType, type WeatherType } from '@/types/weather';

export const getCurrentWeather = async (city: string): Promise<WeatherType> => {
  const url = `${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=${city}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getForecast = async (
  city: string,
  days: number
): Promise<ForecastType> => {
  const url = `${WEATHER_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=${days}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
