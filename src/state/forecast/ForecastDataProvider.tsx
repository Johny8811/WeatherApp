import { createContext, useContext, ReactNode, useState } from 'react';

import { forecastDataFetch } from '../../api/forecastDataFetch';
import { ForecastData } from './types';
import { Coord } from '../weather/types'

type Props = {
  children: ReactNode;
}

type ForecastDataProvider = {
  forecastData: ForecastData | undefined,
  fetchForecastData: (data: Coord) => void
}

const ForecastDataContext = createContext<ForecastDataProvider>({
  forecastData: undefined,
  fetchForecastData: () => {},
});

export const ForecastDataProvider = ({ children }: Props) => {
  const [forecastData, setForecastData] = useState<ForecastData | undefined>()

  const fetchForecastData = async (coord: Coord) => {
    const data = await forecastDataFetch(coord);
    setForecastData(data);
  }

  return (
    <ForecastDataContext.Provider value={{ forecastData, fetchForecastData }}>
      {children}
    </ForecastDataContext.Provider>
  )
}

export const useForecastData = () => {
  return useContext(ForecastDataContext);
}
