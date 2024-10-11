import React from 'react';
import axios from 'axios';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post('/api/users/login', values);
        toast.success(`Welcome back, ${data.name}!`);
      } catch (error) {
        toast.error('Login failed. Please check your credentials.');
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-3xl mb-6 text-center text-gray-800">Login to Your Account</h2>
        <form onSubmit={formik.handleSubmit}>
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
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className="flex items-center border rounded px-3 py-2 shadow-sm">
              <AiOutlineLock className="text-gray-400 mr-2" />
              <input
                type="password"
                className="w-full py-1 px-2 outline-none"
                {...formik.getFieldProps('password')}
                placeholder="Your Password"
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account? <Link to="/register" className="text-blue-500">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
