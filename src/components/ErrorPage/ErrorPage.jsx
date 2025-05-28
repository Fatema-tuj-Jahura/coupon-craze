import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center text-center px-4 py-12">
      <h1 className="text-6xl font-extrabold text-orange-500">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to="/">
        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
