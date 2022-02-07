import React from "react";

import { WeatherIcon } from './WeatherIcon'

export const BasicInfo = () => {
  return (
    <div className="basicInfo">
      <div className="basicInfo_icon">
        <WeatherIcon iconType={'01d'} description={'clear sky'} />
      </div>
      <h2>Weather info</h2>
      <div className="basicInfo_data">
        <span>
          <h4>Prague</h4>
          <h2>4s</h2>
        </span>
        <span>
          <h4>weather.main</h4>
          <h5>High: {4} - Low: {-1}</h5>
        </span>
      </div>
      <div className="divider"/>
      <div className="basicInfo_dataExt">
          <p>Feels like</p>
          <p>5</p>
      </div>
      <div className="basicInfo_dataExt">
        <p>Pressure</p>
        <p>1023</p>
      </div>
      <div className="basicInfo_dataExt">
        <p>Humidity</p>
        <p>100</p>
      </div>
    </div>
  )
}
