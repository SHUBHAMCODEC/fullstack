import React from 'react';

function LocationModal({ onClose }) {
  const enableLocation = () => {
    // Logic to request location access goes here.
    onClose();
  };

  const searchManually = () => {
    // Logic to open manual search goes here.
    onClose();
  };

  return (
    <div className="modal">
      <h2>Enable Location</h2>
      <p>Please enable location services to find your delivery address.</p>
      <button onClick={enableLocation}>Enable Location</button>
      <button onClick={searchManually}>Search Manually</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default LocationModal;
