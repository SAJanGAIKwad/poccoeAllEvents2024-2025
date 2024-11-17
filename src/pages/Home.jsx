import React from 'react';
import CarouselPage from '../CarouselPage';
import Event from './Event';

const Home = () => {
  return (
    <div className="bg-gray-100 pt-16"> {/* pt-16 adds padding to prevent overlap */}
      <CarouselPage />
      <Event />
    </div>
  );
};

export default Home;
