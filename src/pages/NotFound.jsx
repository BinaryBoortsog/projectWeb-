import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-6">Oops! Page not found.</p>
      <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
