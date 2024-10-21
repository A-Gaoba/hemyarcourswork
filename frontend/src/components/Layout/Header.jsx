// src/components/Layout/Header.jsx

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">Retail Space Rental</h1>
      <nav>
        <Link to="/" className="mr-4">
          Home
        </Link>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.email}</span>
            <button onClick={logout} className="text-white">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">
              Login
            </Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
