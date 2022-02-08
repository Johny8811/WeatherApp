import React, { useEffect } from 'react';

import { useCoord } from '../state/CoordProvider';
import { useWeatherData } from '../state/weather/WeatherDataProvider';
import { useForecastData } from '../state/forecast/ForecastDataProvider';

import './WeatherApp.css';
import { Map } from '../components/Map'
import { BasicInfo } from '../components/BasicInfo/BasicInfo'
import { ForecastChart } from '../components/ForecastChart/ForecastChart'

const mapElement = <div style={{ height: `100%` }} />;
const containerElement = <div style={{ height: `50vh` }} />;

export const WeatherApp = () => {
  const { coord } = useCoord();
  const { getWeatherData } = useWeatherData();
  const { getForecastData } = useForecastData();

  useEffect(() => {
    getWeatherData(coord);
    getForecastData(coord);
  }, [coord]);

  return (
    <div>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={mapElement}
        containerElement={containerElement}
        mapElement={mapElement}
      />
      <div className="infoContainer">
        <BasicInfo />
        <ForecastChart />
      </div>
    </div>
  );
}
