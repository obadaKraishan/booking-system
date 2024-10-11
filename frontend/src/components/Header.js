import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Booking System</h1>
        <nav>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/login" className="text-white mx-2">Login</Link>
          <Link to="/register" className="text-white mx-2">Register</Link>
          <Link to="/profile" className="text-white mx-2">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
