// src/controllers/spaceController.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Get all retail spaces
const getAllSpaces = async (req, res) => {
  try {
    const spaces = await prisma.retailSpace.findMany();
    res.json(spaces);
  } catch (error) {
    console.error("Error fetching spaces:", error); // Log error for debugging
    res.status(500).json({ message: "Server error while fetching spaces" });
  }
};

// Create a new retail space
const createSpace = async (req, res) => {
  const { name, floor, size, hasAirConditioner, rentCost } = req.body;

  // Input validation
  if (!name || !floor || !size || rentCost === undefined) {
    return res
      .status(400)
      .json({ message: "Name, floor, size, and rent cost are required." });
  }

  if (size <= 0 || floor <= 0 || rentCost < 0) {
    return res
      .status(400)
      .json({
        message:
          "Size, floor must be positive, and rent cost cannot be negative.",
      });
  }

  try {
    const newSpace = await prisma.retailSpace.create({
      data: {
        name,
        floor,
        size,
        hasAirConditioner,
        rentCost,
      },
    });
    res.status(201).json(newSpace);
  } catch (error) {
    console.error("Error adding space:", error); // Log error for debugging
    res.status(500).json({ message: "Server error while adding space" });
  }
};

// Update a retail space
const updateSpace = async (req, res) => {
  const { id } = req.params;
  const { name, floor, size, hasAirConditioner, rentCost } = req.body;

  // Input validation
  if (!name || !floor || !size || rentCost === undefined) {
    return res
      .status(400)
      .json({ message: "Name, floor, size, and rent cost are required." });
  }

  if (size <= 0 || floor <= 0 || rentCost < 0) {
    return res
      .status(400)
      .json({
        message:
          "Size, floor must be positive, and rent cost cannot be negative.",
      });
  }

  try {
    const updatedSpace = await prisma.retailSpace.update({
      where: { id: Number(id) },
      data: {
        name,
        floor,
        size,
        hasAirConditioner,
        rentCost,
      },
    });
    res.json(updatedSpace);
  } catch (error) {
    console.error("Error updating space:", error); // Log error for debugging
    res.status(500).json({ message: "Server error while updating space" });
  }
};

// Delete a retail space
const deleteSpace = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.retailSpace.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting space:", error); // Log error for debugging
    res.status(500).json({ message: "Server error while deleting space" });
  }
};

module.exports = { getAllSpaces, createSpace, updateSpace, deleteSpace };
