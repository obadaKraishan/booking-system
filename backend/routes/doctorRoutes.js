const express = require('express');
const {
  getDoctors,
  addDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} = require('../controllers/doctorController');
const { protect } = require('../middleware/authMiddleware');  // Optional: protect routes
const router = express.Router();

router.route('/').get(getDoctors).post(protect, addDoctor);  // Optional: protect route
router.route('/:id').get(getDoctorById).put(protect, updateDoctor).delete(protect, deleteDoctor);

module.exports = router;
