import React, { useState } from 'react';
import MapComponent from './MapComponent';
import LocationModal from './LocationModal';
import AddressList from './AddressList';
import AddressForm from './AddressForm';
import '../App.css';

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="App">
      <h1>Delivery Location Selector</h1>
      <MapComponent />
      <AddressForm />
      <AddressList />
      {showModal && (
        <LocationModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
