const Doctor = require('../models/Doctor');

// Get all doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Add a new doctor
const addDoctor = async (req, res) => {
  const { name, email, specialty, phone, availability, description } = req.body;

  try {
    const doctorExists = await Doctor.findOne({ email });
    if (doctorExists) {
      return res.status(400).json({ message: 'Doctor already exists' });
    }

    const doctor = new Doctor({
      name,
      email,
      specialty,
      phone,
      availability,
      description,
    });

    const savedDoctor = await doctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get a single doctor by ID
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update doctor details
const updateDoctor = async (req, res) => {
  const { name, email, specialty, phone, availability, description } = req.body;

  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.name = name || doctor.name;
    doctor.email = email || doctor.email;
    doctor.specialty = specialty || doctor.specialty;
    doctor.phone = phone || doctor.phone;
    doctor.availability = availability || doctor.availability;
    doctor.description = description || doctor.description;

    const updatedDoctor = await doctor.save();
    res.json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a doctor
const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    await doctor.remove();
    res.json({ message: 'Doctor removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  getDoctors,
  addDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
