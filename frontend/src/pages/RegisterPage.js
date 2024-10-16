import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);  
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post('http://localhost:5001/api/users/register', values);
        localStorage.setItem('token', data.token);  // Store token in localStorage
        toast.success(`User ${data.name} registered successfully!`);
        navigate('/');  // Redirect to HomePage
      } catch (error) {
        toast.error('Registration failed. Please try again.');
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-3xl mb-6 text-center text-gray-800">Create an Account</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <div className="flex items-center border rounded px-3 py-2 shadow-sm">
              <AiOutlineUser className="text-gray-400 mr-2" />
              <input
                type="text"
                className="w-full py-1 px-2 outline-none"
                {...formik.getFieldProps('name')}
                placeholder="Your Name"
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <div className="flex items-center border rounded px-3 py-2 shadow-sm">
              <AiOutlineMail className="text-gray-400 mr-2" />
              <input
                type="email"
                className="w-full py-1 px-2 outline-none"
                {...formik.getFieldProps('email')}
                placeholder="Your Email"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className="flex items-center border rounded px-3 py-2 shadow-sm relative">
              <AiOutlineLock className="text-gray-400 mr-2" />
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full py-1 px-2 outline-none"
                {...formik.getFieldProps('password')}
                placeholder="Your Password"
              />
              <div
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <div className="flex items-center border rounded px-3 py-2 shadow-sm relative">
              <AiOutlineLock className="text-gray-400 mr-2" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full py-1 px-2 outline-none"
                {...formik.getFieldProps('confirmPassword')}
                placeholder="Confirm Your Password"
              />
              <div
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
            ) : null}
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
