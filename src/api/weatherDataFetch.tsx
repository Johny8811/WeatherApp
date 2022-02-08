import {
  WEATHER_API_KEY,
  LANG,
  UNITS,
  BASE_URL_WEATHER
} from './constants'
import { fetchData } from './fetchData'

export const weatherDataFetch = ({ lat, lon }: { lat: number, lon: number }) => {
  const url = `${BASE_URL_WEATHER}?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${WEATHER_API_KEY}&lang=${LANG}`;

  return fetchData(url);
}
