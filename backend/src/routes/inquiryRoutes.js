// src/routes/inquiryRoutes.js

const express = require('express');
const { createInquiry, getAllInquiries } = require('../controllers/inquiryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createInquiry); 
router.get('/', authMiddleware, getAllInquiries);

module.exports = router;
