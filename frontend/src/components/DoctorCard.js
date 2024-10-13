// src/components/DoctorCard.js

import React from 'react';
import { FaStethoscope, FaEnvelope, FaPhone, FaUserMd } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex flex-col md:flex-row items-center md:w-[48%]">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <img
          src={`${process.env.PUBLIC_URL}/images/avatar.png`}
          alt={`${doctor.name}'s avatar`}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <FaUserMd className="text-blue-500 mr-2" /> {doctor.name}
        </h3>
        <p className="text-gray-700 mb-2 flex items-center">
          <FaStethoscope className="text-green-500 mr-2" /> {doctor.specialty}
        </p>
        <p className="text-gray-700 mb-2 flex items-center">
          <FaEnvelope className="text-purple-500 mr-2" /> {doctor.email}
        </p>
        <p className="text-gray-700 mb-2 flex items-center">
          <FaPhone className="text-red-500 mr-2" /> {doctor.phone}
        </p>
        <p className="text-gray-600">{doctor.description}</p>

        <div className="mt-4">
          <Link
            to={`/doctor/${doctor._id}`}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
