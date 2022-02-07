import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import React from "react";

import { useCoord, DEFAULT_COORDINATES } from '../state/CoordProvider'

const MapComponent = () => {
  const { coord, setCoord } = useCoord();

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: DEFAULT_COORDINATES.lat, lng: DEFAULT_COORDINATES.lon }}
      onClick={({latLng}) => {
        setCoord({
          lat: latLng.lat(),
          lon: latLng.lng()
        })
      }}
    >
      {coord && (
        <Marker
          position={{
            lat: coord.lat,
            lng: coord.lon
          }}
        />
      )}
    </GoogleMap>
  );
}

export const Map = withScriptjs(withGoogleMap(MapComponent))
