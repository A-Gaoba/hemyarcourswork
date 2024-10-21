// src/pages/Home.jsx

import { Link } from "react-router-dom"; // Import Link for navigation

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Welcome Back to Retail Space Rental!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover new opportunities for your business needs.
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            to="/inquiries"
            className="px-8 py-3 text-lg text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
          >
            View My Inquiries
          </Link>
          <Link
            to="/spaces"
            className="px-8 py-3 text-lg text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Explore Retail Spaces
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
