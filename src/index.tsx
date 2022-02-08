import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WeatherApp } from './main/WeatherApp';
import reportWebVitals from './reportWebVitals';

import { CoordProvider } from './state/CoordProvider';
import { WeatherDataProvider } from './state/weather/WeatherDataProvider';
import { ForecastDataProvider } from './state/forecast/ForecastDataProvider';

ReactDOM.render(
  <React.StrictMode>
    <CoordProvider>
      <WeatherDataProvider>
        <ForecastDataProvider>
          <WeatherApp />
        </ForecastDataProvider>
      </WeatherDataProvider>
    </CoordProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
