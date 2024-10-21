// src/controllers/inquiryController.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create a new inquiry
const createInquiry = async (req, res) => {
  const { clientName, clientContact, spaceId } = req.body;

  if (!clientName || !clientContact || !spaceId) {
    return res
      .status(400)
      .json({ message: "Client name, contact, and space ID are required." });
  }

  try {
    const newInquiry = await prisma.inquiry.create({
      data: {
        clientName,
        clientContact,
        spaceId,
        userId: req.userId, // Ensure req.userId is set
      },
    });
    res.status(201).json(newInquiry);
  } catch (error) {
    console.error("Error creating inquiry:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all inquiries
const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      include: {
        space: true, // Include the related retail space data
      },
    });
    res.json(inquiries);
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createInquiry, getAllInquiries };
