import React, { useEffect } from 'react';

import { useCoord } from '../state/CoordProvider'
import { useWeatherData } from '../state/WeatherDataProvider'

import './WeatherApp.css';
import { Map } from './components/Map'
import { BasicInfo } from './components/BasicInfo'

const mapElement = <div style={{ height: `100%` }} />

export const WeatherApp = () => {
  const { coord } = useCoord();
  const { getWeatherData } = useWeatherData();

  useEffect(() => {
    getWeatherData(coord);
  }, [coord])

  return (
    <div>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={mapElement}
        containerElement={<div style={{ height: `50vh` }} />}
        mapElement={mapElement}
      />
      <div className="infoContainer">
        <BasicInfo />
        <div className="infoContainer_chart">hello</div>
      </div>
    </div>
  );
}
