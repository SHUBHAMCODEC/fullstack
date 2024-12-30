import React, { useContext } from 'react';
import { AddressContext } from '../context/AddressContext';

function AddressList() {
  const { addresses } = useContext(AddressContext);

  return (
    <div className="address-list">
      <h2>Saved Addresses</h2>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>{address.details}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddressList;
