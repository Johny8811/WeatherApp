import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import React from "react";

export const Map = withScriptjs(withGoogleMap(() =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 50.068, lng: 14.434 }}
    onClick={() => {
      // TODO: get weather data
    }}
  >
    <Marker position={{ lat: 50.068, lng: 14.434 }} />
  </GoogleMap>
))
