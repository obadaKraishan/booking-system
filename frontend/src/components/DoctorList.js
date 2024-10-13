// src/components/DoctorList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorCard from './DoctorCard';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get('http://localhost:5001/api/doctors'); // Replace with your backend URL
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="container mx-auto">
      {doctors.length > 0 ? (
        <div className="flex flex-wrap justify-between gap-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <p className="text-gray-700">No doctors available.</p>
      )}
    </div>
  );
};

export default DoctorList;
