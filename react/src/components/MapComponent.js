import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

function MapComponent() {
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);

  const locateUser = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ lat: latitude, lng: longitude });
      setMarkerPosition({ lat: latitude, lng: longitude });
    });
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={10}
        onClick={(event) => setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() })}
      >
        <Marker position={markerPosition} />
        <button onClick={locateUser}>Locate Me</button>
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
