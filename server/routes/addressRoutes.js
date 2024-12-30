const express = require('express');
const router = express.Router();
const Address = require('../models/Address');

// Retrieve all addresses
router.get('/', async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new address
router.post('/', async (req, res) => {
  const address = new Address({
    details: req.body.details,
  });

  try {
    const savedAddress = await address.save();
    res.status(201).json(savedAddress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
