// src/pages/DoctorDetails.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaStethoscope, FaEnvelope, FaPhone, FaUserMd, FaClock, FaHome } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DoctorDetails = () => {
  const { id } = useParams();  // Get the doctor ID from the URL
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5001/api/doctors/${id}`); // Fetch doctor details
        setDoctor(data);
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };

    fetchDoctor();
  }, [id]);

  if (!doctor) {
    return <p className="text-gray-700">Loading doctor details...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        {/* Breadcrumb */}
        <nav className="mb-4" aria-label="breadcrumb">
          <ol className="flex items-center text-gray-500">
            <li>
              <Link to="/" className="flex items-center text-blue-500 hover:underline">
                <FaHome className="mr-2" />
                Home
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li className="text-gray-700">Doctor Details</li>
          </ol>
        </nav>

        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start">
          {/* Doctor Avatar */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
            <img
              src={`${process.env.PUBLIC_URL}/images/avatar.png`}
              alt={`${doctor.name}'s avatar`}
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Doctor Details */}
          <div className="flex-grow">
            <h2 className="text-4xl font-bold mb-6 flex items-center">
              <FaUserMd className="text-blue-500 mr-3" /> {doctor.name}
            </h2>
            <p className="text-xl text-gray-700 mb-6 flex items-center">
              <FaStethoscope className="text-green-500 mr-3" /> {doctor.specialty}
            </p>
            <p className="text-lg text-gray-700 mb-4 flex items-center">
              <FaEnvelope className="text-purple-500 mr-3" /> {doctor.email}
            </p>
            <p className="text-lg text-gray-700 mb-4 flex items-center">
              <FaPhone className="text-red-500 mr-3" /> {doctor.phone}
            </p>
            <p className="text-lg text-gray-700 mb-8">{doctor.description}</p>

            <h3 className="text-3xl font-semibold mt-8 mb-6">Availability</h3>
            <ul className="text-lg">
              {doctor.availability.map((slot, index) => (
                <li key={index} className="mb-3 flex items-center">
                  <FaClock className="text-blue-500 mr-3" />
                  {slot.day}: {new Date(slot.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                  {new Date(slot.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorDetails;
