import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../src/UserContext"; // Assuming UserContext is correctly implemented
import Logo from "../Images/event-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Profile dropdown state
  const [userDetails, setUserDetails] = useState(null); // Fetched user details
  const { user, setUser } = useContext(UserContext); // User state from context
  const navigate = useNavigate();

  // Fetch user details if logged in
  useEffect(() => {
    if (user) {
      fetchUserDetails();
    }
  }, [user]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch("/api/user/details"); // Replace with your backend API endpoint
      const data = await response.json();
      if (response.ok) {
        setUserDetails(data);
      } else {
        console.error("Error fetching user details:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
    alert("You have logged out!");
    setIsDropdownOpen(false);
    navigate("/user-login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto mr-2" />
            <span className="text-2xl font-bold">Evently</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/home" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link to="/event" className="hover:text-gray-300">
              Event
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>

            {/* Profile or Login */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600"
                >
                  {userDetails?.name || "Profile"}
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      View Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/user-login"
                className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-2/3 bg-gray-800 h-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="mt-10 px-4">
          <Link to="/home" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Home
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            About
          </Link>
          <Link to="/event" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Event
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Contact
          </Link>

          {/* Mobile Profile or Login */}
          {user ? (
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="mt-4 bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600 block w-full"
              >
                {userDetails?.name || "Profile"}
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-white text-black rounded shadow-lg">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/user-login"
              className="mt-4 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 block"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
