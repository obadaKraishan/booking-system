// src/components/DoctorList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorCard from './DoctorCard';
import { FaSearch } from 'react-icons/fa'; // Magnifying glass icon

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('All');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [visibleDoctors, setVisibleDoctors] = useState(8); // Number of doctors to show initially

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get('http://localhost:5001/api/doctors'); // Replace with your backend URL
        setDoctors(data);
        setFilteredDoctors(data); // Initially, all doctors are shown
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    // Filter doctors based on search term and specialty
    const filtered = doctors.filter((doctor) => {
      const matchesSearchTerm = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = specialtyFilter === 'All' || doctor.specialty === specialtyFilter;
      return matchesSearchTerm && matchesSpecialty;
    });
    setFilteredDoctors(filtered);
  }, [searchTerm, specialtyFilter, doctors]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSpecialtyFilter(e.target.value);
  };

  // Load more doctors
  const loadMoreDoctors = () => {
    setVisibleDoctors((prevVisibleDoctors) => prevVisibleDoctors + 8); // Increase the number of visible doctors by 8
  };

  // Get unique specialties from the doctors list for filtering
  const specialties = ['All', ...new Set(doctors.map((doctor) => doctor.specialty))];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        {/* Search bar with magnifying glass icon */}
        <div className="flex items-center w-full md:w-7/10 bg-white border rounded px-4 py-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by doctor's name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="flex-grow outline-none"
          />
        </div>

        {/* Specialty filter */}
        <select
          value={specialtyFilter}
          onChange={handleSpecialtyChange}
          className="w-full md:w-3/10 px-4 py-2 border rounded bg-white"
        >
          {specialties.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
      </div>

      {/* Doctor List */}
      {filteredDoctors.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-between gap-4">
            {filteredDoctors.slice(0, visibleDoctors).map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleDoctors < filteredDoctors.length && (
            <div className="text-center mt-4">
              <button
                onClick={loadMoreDoctors}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-700">No doctors available.</p>
      )}
    </div>
  );
};

export default DoctorList;
