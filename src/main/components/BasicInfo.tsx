import React  from "react";

import { useWeatherData } from '../../state/weather/WeatherDataProvider'
import { WeatherIcon } from './WeatherIcon'

export const BasicInfo = () => {
  const { weatherData } = useWeatherData();

  return (
    <div className="basicInfo">
      <div className="basicInfo_icon">
        {weatherData && (
          <WeatherIcon
            iconType={weatherData?.weather[0].icon}
            description={weatherData?.weather[0].description}/>
        )}
      </div>
      <h2>Weather info</h2>
      <div className="basicInfo_data">
        <span>
          <h4>{weatherData?.name}</h4>
          <h2>{weatherData?.main.temp}</h2>
        </span>
        <span>
          <h4>{weatherData?.weather[0].main}</h4>
          <h5>High: {weatherData?.main.temp_max} - Low: {weatherData?.main.temp_min}</h5>
        </span>
      </div>
      <div className="divider"/>
      <div className="basicInfo_dataExt">
          <p>Feels like</p>
          <p>{weatherData?.main.feels_like}</p>
      </div>
      <div className="basicInfo_dataExt">
        <p>Pressure</p>
        <p>{weatherData?.main.pressure}</p>
      </div>
      <div className="basicInfo_dataExt">
        <p>Humidity</p>
        <p>{weatherData?.main.humidity}</p>
      </div>
    </div>
  )
}
