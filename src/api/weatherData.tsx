import {
  WEATHER_API_KEY,
  LANG,
  UNITS,
  BASE_URL
} from './constants'

export const weatherData = ({ lat, lon }: { lat: number, lon: number }) => {
  const urlToCall = `${BASE_URL}?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${WEATHER_API_KEY}&lang=${LANG}`;

  return fetch(urlToCall)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .catch(console.error)
}
