// src/components/RetailSpace/SpaceForm.jsx

import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

function RetailSpaceForm({ onAdd }) {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [hasAirConditioner, setHasAirConditioner] = useState(false);
  const [floor, setFloor] = useState("");
  const [rentCost, setRentCost] = useState(""); // State for rent cost
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !size || !floor || !rentCost) {
      setError("All fields are required."); // Set error message
      return;
    }

    // Clear error message
    setError("");

    const newSpace = {
      name,
      size: parseInt(size, 10), // Ensure size is a number
      hasAirConditioner,
      floor: parseInt(floor, 10), // Ensure floor is a number
      rentCost: parseFloat(rentCost), // Ensure rent cost is a number
    };

    onAdd(newSpace); // Call the onAdd prop to handle the new retail space
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setSize("");
    setHasAirConditioner(false);
    setFloor("");
    setRentCost(""); // Reset rent cost
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Retail Space</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}{" "}
      {/* Display error message */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Size (sq ft)"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <label className="inline-flex items-center mb-2">
          <input
            type="checkbox"
            checked={hasAirConditioner}
            onChange={() => setHasAirConditioner(!hasAirConditioner)}
            className="mr-2"
          />
          Has Air Conditioner
        </label>
        <input
          type="number"
          placeholder="Floor"
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Rent Cost"
          value={rentCost}
          onChange={(e) => setRentCost(e.target.value)}
          required
          className="border p-2 mb-4 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Add Space
      </button>
    </form>
  );
}

// Prop type validation
RetailSpaceForm.propTypes = {
  onAdd: PropTypes.func.isRequired, // Expecting onAdd to be a function
};

export default RetailSpaceForm;
