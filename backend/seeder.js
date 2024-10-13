const mongoose = require('mongoose');
const dotenv = require('dotenv');
const doctors = require('./utils/doctors');  // Sample doctor data
const Doctor = require('./models/Doctor');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Doctor.deleteMany();
    await Doctor.insertMany(doctors);
    console.log('Doctors imported!');
    process.exit();
  } catch (error) {
    console.error('Error with data import:', error);
    process.exit(1);
  }
};

importData();
