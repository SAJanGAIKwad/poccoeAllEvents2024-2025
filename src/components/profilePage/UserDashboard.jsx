import React from 'react';
import Sidebar from './Sidebar';
import Profile from './profile';

const UserDashboard = () => {
  return (
    <div className=" h-screen bg-gray-200 flex flex-col md:flex-row text-sm md:text-md">
      <div className=" bg-white">
        <Sidebar />
      </div>
      <div className="w-full p-6">
        <Profile />
      </div>
    </div>
  );
};

export default UserDashboard;
