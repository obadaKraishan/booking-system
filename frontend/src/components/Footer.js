import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 p-4 mt-4">
      <div className="container mx-auto text-center">
        <p className="text-white">&copy; {new Date().getFullYear()} Booking System. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
