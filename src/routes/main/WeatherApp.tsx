import React from 'react';

import './WeatherApp.css';
import { Map } from '../../components/Map'

const mapElement = <div style={{ height: `100%` }} />

export const WeatherApp = () => {
  return (
    <div>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={mapElement}
        containerElement={<div style={{ height: `50vh` }} />}
        mapElement={mapElement}
      />
    </div>
  );
}
