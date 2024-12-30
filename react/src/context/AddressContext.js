import React, { createContext, useState, useEffect } from 'react';
import { getAddresses, addAddress as apiAddAddress } from '../api';

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const data = await getAddresses();
        setAddresses(data);
      } catch (error) {
        console.error("Failed to fetch addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  const addAddress = async (address) => {
    try {
      const newAddress = await apiAddAddress(address);
      setAddresses([...addresses, newAddress]);
    } catch (error) {
      console.error("Failed to add address:", error);
    }
  };

  return (
    <AddressContext.Provider value={{ addresses, addAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
