// src/components/AddressForm.js
import React, { useContext, useState } from 'react';
import { AddressContext } from '../context/AddressContext';

function AddressForm() {
  const { addAddress } = useContext(AddressContext);
  const [addressDetails, setAddressDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addressDetails) {
      addAddress(addressDetails);
      setAddressDetails('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      <input
        type="text"
        placeholder="Enter address"
        value={addressDetails}
        onChange={(e) => setAddressDetails(e.target.value)}
        required
      />
      <button type="submit">Save Address</button>
    </form>
  );
}

export default AddressForm;
