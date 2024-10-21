// src/components/RetailSpace/SpaceList.jsx

import PropTypes from "prop-types"; // Import PropTypes

function RetailSpaceList({ spaces }) {
  // Create an object to track the latest entry for each unique space
  const latestSpaces = {};

  // Populate the latestSpaces object
  spaces.forEach((space) => {
    const key = `${space.name}-${space.floor}-${space.size}`;
    if (!latestSpaces[key] || latestSpaces[key].updatedAt < space.updatedAt) {
      latestSpaces[key] = space; // Store the latest entry
    }
  });

  // Convert the latestSpaces object back to an array
  const uniqueSpaces = Object.values(latestSpaces);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {uniqueSpaces.length === 0 ? (
        <p className="text-gray-500">No retail spaces available.</p>
      ) : (
        uniqueSpaces.map((space) => (
          <div key={space.id} className="border-b py-2 mb-2">
            <h3 className="font-semibold">
              {space.name} - Floor: {space.floor}, Size: {space.size} sq ft,
              Rent: ${space.rentCost}
            </h3>
            {space.hasAirConditioner && (
              <span className="text-green-500 font-medium">
                Has Air Conditioner
              </span>
            )}
            {/* Show previous entries if any */}
            {spaces
              .filter(
                (s) =>
                  s.name === space.name &&
                  s.floor === space.floor &&
                  s.size === space.size &&
                  s.id !== space.id // Exclude the current entry
              )
              .map((prevSpace) => (
                <div key={prevSpace.id} className="text-gray-400 text-sm">
                  <span style={{ textDecoration: "line-through" }}>
                    {prevSpace.name} - Floor: {prevSpace.floor}, Size:{" "}
                    {prevSpace.size} sq ft, Rent: ${prevSpace.rentCost}
                  </span>
                </div>
              ))}
          </div>
        ))
      )}
    </div>
  );
}

// Prop type validation
RetailSpaceList.propTypes = {
  spaces: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      hasAirConditioner: PropTypes.bool.isRequired,
      floor: PropTypes.number.isRequired,
      rentCost: PropTypes.number.isRequired,
      updatedAt: PropTypes.string.isRequired, // Assume you have a timestamp for updates
    })
  ).isRequired, // Expecting spaces to be an array of objects
};

export default RetailSpaceList;
