import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <p className="text-center mt-10 text-red-600">User not logged in.</p>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center px-4 pb-10">
      {/* Cover Section */}
      <div className="w-full bg-gradient-to-r from-green-400 to-green-600 py-10 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome, {user.displayName || 'User'}!
        </h1>
        <p className="text-sm md:text-base mt-2">
          Here’s your profile information
        </p>
      </div>

      {/* User Info Card */}
      <div className="w-full max-w-md mt-8 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
        <img
          src={user.photoURL}
          alt="User"
          className="w-24 h-24 rounded-full border-4 border-green-400 object-cover"
        />
        <h2 className="text-xl font-bold mt-4 text-green-700">
          {user.displayName}
        </h2>
        <p className="text-gray-600 mt-1 break-all">{user.email}</p>
      </div>
    </div>
  );
};

export default MyProfile;
