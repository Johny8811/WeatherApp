import { createContext, useContext, ReactNode, useState } from 'react';

import { weatherDataFetch } from '../../api/weatherDataFetch';
import { WeatherData, Coord } from './types';

type Props = {
  children: ReactNode;
}

type WeatherDataProvider = {
  weatherData: WeatherData | undefined,
  fetchWeatherData: (data: Coord) => void
}

const WeatherDataContext = createContext<WeatherDataProvider>({
  weatherData: undefined,
  fetchWeatherData: () => {},
});

export const WeatherDataProvider = ({ children }: Props) => {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>()

  const fetchWeatherData = async (coord: Coord) => {
    const data = await weatherDataFetch(coord);
    setWeatherData(data);
  }

  return (
    <WeatherDataContext.Provider value={{ weatherData, fetchWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  )
}

export const useWeatherData = () => {
  return useContext(WeatherDataContext);
}
