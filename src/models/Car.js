const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Car
let Car = new Schema({
  vehicle_number: {
    type: String
  },
  model_name: {
    type: String
  },
  seating_capacity: {
    type: Number
  },
  rent: {
    type: Number
  },
  booked: {
    type: Boolean
  }
},{
    collection: 'car_module'
});

module.exports = mongoose.model('Car', Car);