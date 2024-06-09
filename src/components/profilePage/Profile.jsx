import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    class: '10',
    division: 'A',
    department: 'Computer Science',
    email: 'johndoe@example.com'
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action here, such as sending the updated profile to a server
    console.log('Updated Profile:', profile);
    setEditMode(false); // Turn off edit mode after submitting
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full relative ">
        
      {editMode ? (
        <form onSubmit={handleSubmit}>
            <div className="  border-t w-full ">
              {Object.entries(profile).map(([key, value]) => (
                <div className="flex items-center gap-2 -mb-6" key={key}>
                  <label className="text-gray-700 font-semibold md:text-lg">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>

                  <input
                    type="text"
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="text-gray-900 md:text-lg font-thin italic border-none "
                  />

                </div>
            ))}
            </div>
            <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ">
              Save
            </button>
        </form>
      ) : (
        <div>
            
            <div className="space-y-4 border-t pt-4 w-full">
              {Object.entries(profile).map(([key, value]) => (
                <div className="flex items-center gap-2" key={key}>
                  <label className="text-gray-700 font-semibold md:text-lg">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  <p className="text-gray-900 md:text-lg font-thin italic">{value}</p>
                </div>
              ))}
              
            </div>
            <button onClick={() => setEditMode(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
                 Edit
            </button>
        </div>
        
      )}
    </div>
  );
};

export default Profile;
