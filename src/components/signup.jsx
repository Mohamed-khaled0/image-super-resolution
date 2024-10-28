import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="dark:bg-gray-800 max-w-md w-full card shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Sign <span className="text-fuchsia-500">Up</span>
        </h2>
        <form action="signup-process.php" method="POST">
          <div className="mb-6 relative">
            <label
              htmlFor="name"
              className="block text-gray-500 text-lg font-semibold mb-3"
            >
              Name
            </label>
            <div className="input-group flex items-center">
              <FaUser aria-label="User Icon" className="mr-3 text-xl" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border-none text-lg p-4 focus:outline-none rounded-lg"
              />
            </div>
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="email"
              className="block text-gray-500 text-lg font-semibold mb-3"
            >
              Email
            </label>
            <div className="input-group flex items-center">
              <FaEnvelope aria-label="Email Icon" className="mr-3 text-xl" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border-none text-lg p-4 focus:outline-none rounded-lg"
              />
            </div>
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-gray-500 text-lg font-semibold mb-3"
            >
              Password
            </label>
            <div className="input-group flex items-center">
              <FaLock aria-label="Password Icon" className="mr-3 text-xl" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your Password"
                required
                className="w-full border-none text-lg p-4 focus:outline-none rounded-lg"
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-gray-700 text-sm">
              Remember me
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-fuchsia-700 via-fuchsia-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:scale-105 transition duration-300 ease-in-out text-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-6 text-lg">
          Already have an account?{' '}
          <Link to="/login" className="text-fuchsia-700 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
