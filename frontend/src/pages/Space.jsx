// src/pages/RetailSpace.jsx

import { useState, useEffect } from "react";
import RetailSpaceForm from "../components/RetailSpace/SpaceForm";
import RetailSpaceList from "../components/RetailSpace/SpaceList";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify for notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function RetailSpacePage() {
  const [spaces, setSpaces] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/spaces");
        if (!response.ok) {
          throw new Error("Failed to fetch spaces");
        }
        const data = await response.json();
        setSpaces(data);
      } catch (error) {
        console.error("Error fetching spaces:", error);
        toast.error("Error fetching spaces"); // Notify error
      }
    };

    fetchSpaces();
  }, []);

  const handleAddSpace = async (newSpace) => {
    const token = localStorage.getItem("token"); // Retrieve token
    try {
      // Check for duplicate spaces in the current list
      const isDuplicate = spaces.some(
        (space) =>
          space.name === newSpace.name &&
          space.floor === newSpace.floor &&
          space.size === newSpace.size
      );

      if (isDuplicate) {
        toast.error(
          "A retail space with the same name, floor, and size already exists."
        );
        return; // Prevent addition of duplicate
      }

      const response = await fetch("http://localhost:5000/api/spaces", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newSpace),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add space");
      }

      const addedSpace = await response.json();
      setSpaces((prevSpaces) => [...prevSpaces, addedSpace]);
      toast.success("Retail space added successfully!");
      setIsFormVisible(false); // Hide the form after successful addition
    } catch (error) {
      console.error("Error adding space:", error);
      toast.error("Error adding space: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer /> {/* Include ToastContainer for notifications */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Manage Retail Spaces
        </h1>

        {/* Button to toggle form visibility */}
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-blue-500 text-white p-2 rounded mb-4 w-full"
        >
          {isFormVisible ? "Hide Form" : "Add New Retail Space"}
        </button>

        {/* Add Retail Space Form */}
        {isFormVisible && <RetailSpaceForm onAdd={handleAddSpace} />}

        {/* List of Retail Spaces */}
        <h2 className="text-2xl font-semibold mt-4 mb-4">
          Available Retail Spaces
        </h2>
        {spaces.length > 0 ? (
          <RetailSpaceList spaces={spaces} />
        ) : (
          <p className="text-gray-500">No retail spaces available.</p>
        )}
      </div>
    </div>
  );
}

export default RetailSpacePage;
