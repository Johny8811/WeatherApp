import {
  WEATHER_API_KEY,
  LANG,
  UNITS,
  BASE_URL_FORECAST_HOURLY
} from './constants'
import { fetchData } from './fetchData'

export const forecastDataFetch = ({ lat, lon }: { lat: number, lon: number }) => {
  const url = `${BASE_URL_FORECAST_HOURLY}?lat=${lat}&lon=${lon}&units=${UNITS}&exclude=current,minutely,hourly&appid=${WEATHER_API_KEY}&lang=${LANG}`;

  return fetchData(url);
}
