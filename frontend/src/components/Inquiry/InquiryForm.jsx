// src/components/Inquiry/InquiryForm.jsx

import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

function InquiryForm({ onSubmit }) {
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [spaceId, setSpaceId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInquiry = {
      clientName,
      clientContact,
      spaceId,
    };
    onSubmit(newInquiry); // Call the onSubmit prop to handle the new inquiry
    resetForm();
  };

  const resetForm = () => {
    setClientName("");
    setClientContact("");
    setSpaceId("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submit Inquiry</h2>
      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        required
        className="border p-2 mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Client Contact (Email/Phone)"
        value={clientContact}
        onChange={(e) => setClientContact(e.target.value)}
        required
        className="border p-2 mb-4 w-full"
      />
      <input
        type="number"
        placeholder="Retail Space ID"
        value={spaceId}
        onChange={(e) => setSpaceId(e.target.value)}
        required
        className="border p-2 mb-4 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit Inquiry
      </button>
    </form>
  );
}

// Add prop type validation
InquiryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // Expecting onSubmit to be a function
};

export default InquiryForm;
