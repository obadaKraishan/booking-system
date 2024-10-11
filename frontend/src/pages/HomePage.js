import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto flex items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl mb-4">Welcome to the Booking System</h2>
          <p>
            Easily manage your bookings by registering, logging in, and viewing your profile.
            Use the navigation to get started.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
