import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      const { data } = await axios.post('/api/users/register', { name, email, password });
      toast.success(`User ${data.name} registered successfully!`);
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-3xl mb-6 text-center text-gray-800">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <div className="flex items-center border rounded px-3 py-2 shadow-sm">
              <AiOutlineUser className="text-gray-400 mr-2" />
              <input
                type="text"
                className="w-full py-1 px-2 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <div className="flex items-center border rounded px-3 py-2 shadow-sm">
              <AiOutlineMail className="text-gray-400 mr-2" />
              <input
                type="email"
                className="w-full py-1 px-2 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className="flex items-center border rounded px-3 py-2 shadow-sm">
              <AiOutlineLock className="text-gray-400 mr-2" />
              <input
                type="password"
                className="w-full py-1 px-2 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
