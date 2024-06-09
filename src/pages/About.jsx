import React from 'react';
import Dev1 from "../Images/Dev1.jpg";
import Dev2 from "../Images/Dev2.jpeg";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Us</h1>
        <p className="text-center text-lg text-gray-600 mb-16">
          Welcome to our PCCOE All Event Management System. We are dedicated to providing you with the best experience for your event needs.
        </p>

        <div className="flex flex-wrap justify-center space-y-12 md:space-y-0 md:space-x-12">
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg p-6 max-w-sm w-full flex flex-col justify-between">
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300"
                src={Dev1}
                alt="Developer 1"
              />
              <h2 className="mt-6 text-xl font-semibold text-gray-950 ">Sajan Gaikwad</h2>
              <p className="mt-2 text-gray-600">Full Stack Developer</p>
              <p className="mt-4 text-gray-600">
                Sajan has over 3 years of experience in web development and specializes in creating beautiful user interfaces.
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <a href="https://www.linkedin.com/in/sajangaikwad/" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 " target="_blank">View Profile</a>
            </div>
          </div>

          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg p-6 max-w-sm w-full flex flex-col justify-between">
            <div className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto border-4 border-grey-300"
                src={Dev2}
                alt="Developer 2"
              />
              <h2 className="mt-6 text-xl font-semibold text-gray-800">Vaibhav Ambhore</h2>
              <p className="mt-2 text-gray-600">Full Stack Developer</p>
              <p className="mt-4 text-gray-600">
                Vaibhav is an expert in server-side development and database management, ensuring our system runs smoothly and efficiently.
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <a href="https://www.linkedin.com/in/vaibhav-ambhore-08768422a/" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300" target="_blank">View Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;