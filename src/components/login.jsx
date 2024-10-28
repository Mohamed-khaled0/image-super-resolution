/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-custom flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full card shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Log <span className="text-fuchsia-500">In</span>
        </h2>
        <form action="login-process.php" method="POST">
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <div className="input-group flex items-center">
              <FaEnvelope aria-label="Email Icon" className="mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border-none p-3 focus:outline-none rounded-lg"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <div className="input-group flex items-center">
              <FaLock aria-label="Password Icon" className="mr-2" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your Password"
                required
                className="w-full border-none p-3 focus:outline-none rounded-lg"
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-gray-700 text-sm">
              Remember me
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-fuchsia-700 via-fuchsia-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-fuchsia-700 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;