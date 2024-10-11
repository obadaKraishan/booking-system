const express = require('express');
const { registerUser, authUser, getUserProfile } = require('../controllers/userController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', authUser);

// Get user profile (protected)
router.get('/profile', protect, getUserProfile);

module.exports = router;
