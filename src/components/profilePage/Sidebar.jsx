import React, { useState } from 'react';
import UserInfo from './UserInfo';
import { FaEdit } from 'react-icons/fa';

const Sidebar = () => {
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 h-full">
      <img
        className="w-32 h-32 rounded-full object-cover border-3 border-slate-400"
        src={profileImage}
        alt="Profile"
      />
      <label htmlFor="image-upload" className="text-slate-400 ml-10 -mt-5 rounded-full hover:text-slate-800 cursor-pointer">
        <FaEdit />
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      <UserInfo />
    </div>
  );
};

export default Sidebar;
