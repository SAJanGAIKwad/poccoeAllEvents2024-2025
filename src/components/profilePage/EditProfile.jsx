import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

const EditProfile = ({ profile, onProfileUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableProfile, setEditableProfile] = useState({ ...profile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile({ ...editableProfile, [name]: value });
  };

  const handleSave = () => {
    onProfileUpdate(editableProfile);
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing ? (
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setIsEditing(true)}
        >
          <FiEdit className="h-6 w-6" />
        </button>
      ) : (
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={handleSave}
        >
          Save
        </button>
      )}

      {isEditing &&
        Object.entries(profile).map(([key, value]) => (
          <div key={key} className="mb-4">
            <label htmlFor={key} className="block text-gray-700 font-semibold mb-1">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              type="text"
              id={key}
              name={key}
              value={editableProfile[key]}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        ))}
    </div>
  );
};

export default EditProfile;
