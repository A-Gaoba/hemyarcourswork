// src/components/Inquiry/InquiryList.jsx

import PropTypes from "prop-types"; // Import PropTypes

function InquiryList({ inquiries, onDelete, onEdit }) {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Inquiries</h2>
      <ul>
        {inquiries.map((inquiry) => (
          <li
            key={inquiry.id}
            className="mb-2 flex justify-between items-center"
          >
            {inquiry.clientName} ({inquiry.clientContact}) - Space ID:{" "}
            {inquiry.spaceId}
            <div>
              <button
                onClick={() => onEdit(inquiry)}
                className="bg-yellow-500 text-white p-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(inquiry.id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Add prop type validation
InquiryList.propTypes = {
  inquiries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      clientName: PropTypes.string.isRequired,
      clientContact: PropTypes.string.isRequired,
      spaceId: PropTypes.number.isRequired,
    })
  ).isRequired, // Expecting inquiries to be an array of objects
  onDelete: PropTypes.func.isRequired, // Expecting onDelete to be a function
  onEdit: PropTypes.func.isRequired, // Expecting onEdit to be a function
};

export default InquiryList;
