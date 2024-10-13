// src/components/DoctorCard.js

import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
      <p className="text-gray-700">Specialty: {doctor.specialty}</p>
      <p className="text-gray-700">Email: {doctor.email}</p>
      <p className="text-gray-700">Phone: {doctor.phone}</p>
      <p className="text-gray-700">Description: {doctor.description}</p>
    </div>
  );
};

export default DoctorCard;
