import { GoogleMap, Marker, withGoogleMap, withScriptjs, GoogleMapProps } from "react-google-maps";
import React from "react";

import { useCoord, DEFAULT_COORDINATES } from '../state/CoordProvider'

const MapComponent = () => {
  const { coord, setCoord } = useCoord();

  const handleChangePosition: GoogleMapProps['onClick'] = ({ latLng }) => {
    setCoord({
      lat: latLng.lat(),
      lon: latLng.lng()
    })
  }

  // fixme: original marker is still on map after position is changed
  //  https://stackoverflow.com/questions/66371416/why-is-my-old-marker-still-visible-even-after-the-props-change-in-react-google-m
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: DEFAULT_COORDINATES.lat, lng: DEFAULT_COORDINATES.lon }}
      onClick={handleChangePosition}
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
