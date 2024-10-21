// src/components/Inquiry/EditInquiryForm.jsx

import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

function EditInquiryForm({ inquiry, onSubmit, onCancel }) {
  const [clientName, setClientName] = useState(inquiry.clientName);
  const [clientContact, setClientContact] = useState(inquiry.clientContact);
  const [spaceId, setSpaceId] = useState(inquiry.spaceId);

  useEffect(() => {
    setClientName(inquiry.clientName);
    setClientContact(inquiry.clientContact);
    setSpaceId(inquiry.spaceId);
  }, [inquiry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedInquiry = {
      id: inquiry.id, // Include the ID for the update
      clientName,
      clientContact,
      spaceId,
    };
    onSubmit(updatedInquiry); // Call the onSubmit prop to handle the update
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Inquiry</h2>
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
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update Inquiry
        </button>
        <button type="button" onClick={onCancel} className="text-gray-500">
          Cancel
        </button>
      </div>
    </form>
  );
}

// Add prop type validation
EditInquiryForm.propTypes = {
  inquiry: PropTypes.shape({
    id: PropTypes.number.isRequired,
    clientName: PropTypes.string.isRequired,
    clientContact: PropTypes.string.isRequired,
    spaceId: PropTypes.number.isRequired,
  }).isRequired, // Expecting inquiry to be an object
  onSubmit: PropTypes.func.isRequired, // Expecting onSubmit to be a function
  onCancel: PropTypes.func.isRequired, // Expecting onCancel to be a function
};

export default EditInquiryForm;
