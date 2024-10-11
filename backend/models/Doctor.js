const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  day: {
    type: String, // Example: 'Monday'
    required: true,
  },
  startTime: {
    type: Date, // Example: 2024-10-10T09:00:00Z (9 AM)
    required: true,
  },
  endTime: {
    type: Date, // Example: 2024-10-10T17:00:00Z (5 PM)
    required: true,
  }
}, { _id: false });

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  specialty: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  availability: {
    type: [availabilitySchema],  // Availability stored with precise start and end times
    required: true,
  },
  description: {
    type: String,
  },
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
