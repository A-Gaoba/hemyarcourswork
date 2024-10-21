// src/server.js

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddleware"); 
const spaceRoutes = require('./routes/spaceRoutes'); // Import space routes
const inquiryRoutes = require('./routes/inquiryRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Authentication routes
app.use("/api/auth", authRoutes);
app.use('/api/spaces', spaceRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Example protected route (optional)
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", userId: req.userId });
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
