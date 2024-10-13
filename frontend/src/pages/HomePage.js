// src/pages/HomePage.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DoctorList from '../components/DoctorList'; // Import the DoctorList

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Our Doctors</h2>
        <DoctorList /> {/* Render the list of doctors */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
