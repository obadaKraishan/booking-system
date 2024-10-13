// src/pages/DoctorDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStethoscope, FaEnvelope, FaPhone, FaUserMd, FaClock } from 'react-icons/fa';

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
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <img
            src={`${process.env.PUBLIC_URL}/images/avatar.png`}
            alt={`${doctor.name}'s avatar`}
            className="w-36 h-36 rounded-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaUserMd className="text-blue-500 mr-2" /> {doctor.name}
          </h2>
          <p className="text-gray-700 mb-4 flex items-center">
            <FaStethoscope className="text-green-500 mr-2" /> {doctor.specialty}
          </p>
          <p className="text-gray-700 mb-4 flex items-center">
            <FaEnvelope className="text-purple-500 mr-2" /> {doctor.email}
          </p>
          <p className="text-gray-700 mb-4 flex items-center">
            <FaPhone className="text-red-500 mr-2" /> {doctor.phone}
          </p>
          <p className="text-gray-700 mb-4">{doctor.description}</p>

          <h3 className="text-2xl font-semibold mt-6 mb-4">Availability</h3>
          <ul>
            {doctor.availability.map((slot, index) => (
              <li key={index} className="text-gray-700 mb-2 flex items-center">
                <FaClock className="text-blue-500 mr-2" />
                {slot.day}: {new Date(slot.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                {new Date(slot.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
