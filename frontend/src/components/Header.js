import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Get token from localStorage

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    navigate('/login'); // Redirect to login page
  };

  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Booking System</h1>
        <nav>
          <Link to="/" className="text-white mx-2">Home</Link>
          {token ? (
            <>
              <Link to="/profile" className="text-white mx-2">Profile</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white mx-2 px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mx-2">Login</Link>
              <Link to="/register" className="text-white mx-2">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
