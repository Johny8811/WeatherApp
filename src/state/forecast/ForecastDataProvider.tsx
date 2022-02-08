import { createContext, useContext, ReactNode, useState } from 'react';

import { forecastDataFetch } from '../../api/forecastDataFetch';
import { ForecastData } from './types';
import { Coord } from '../weather/types'

type Props = {
  children: ReactNode;
}

type ForecastDataProvider = {
  forecastData: ForecastData | undefined,
  getForecastData: (data: Coord) => void
}

const ForecastDataContext = createContext<ForecastDataProvider>({
  forecastData: undefined,
  getForecastData: () => {},
});

export const ForecastDataProvider = ({ children }: Props) => {
  const [forecastData, setForecastData] = useState<ForecastData | undefined>()

  const getForecastData = async (coord: Coord) => {
    const data = await forecastDataFetch(coord);
    setForecastData(data);
  }

  return (
    <ForecastDataContext.Provider value={{ forecastData, getForecastData }}>
      {children}
    </ForecastDataContext.Provider>
  )
}

export const useForecastData = () => {
  return useContext(ForecastDataContext);
}
