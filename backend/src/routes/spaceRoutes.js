// src/routes/spaceRoutes.js

const express = require('express');
const {
  getAllSpaces,
  createSpace,
  updateSpace,
  deleteSpace,
} = require('../controllers/spaceController');

const router = express.Router();

// Get all retail spaces
router.get('/', getAllSpaces);

// Create a new retail space
router.post('/', createSpace);

// Update a retail space
router.put('/:id', updateSpace);

// Delete a retail space
router.delete('/:id', deleteSpace);

module.exports = router;
