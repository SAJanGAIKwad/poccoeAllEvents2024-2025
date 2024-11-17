import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext.jsx"; // Ensure the correct path to UserContext

const Profile = () => {
  const { user, setUser } = useContext(UserContext); // Access user context
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      fetchProfileData();
    } else {
      setLoading(false); // Skip API call if user data is already in context
    }
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get("/api/profile", {
        withCredentials: true, // Ensures cookies are sent with the request
      });

      if (response.status === 200) {
        setUser(response.data); // Store user data in context
      } else {
        console.error("Error fetching profile data:", response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading profile...</p>
      </div>
    );
  }

  if (!user || user === "user Info") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-500">
          Unable to fetch profile. Please log in again.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 pt-16 bg-gray-100 rounded shadow">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>User ID:</strong> {user._id}
      </p>
    </div>
  );
};

export default Profile;
