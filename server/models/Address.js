const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  details: String,
});

module.exports = mongoose.model('Address', addressSchema);
