import React from 'react';
import Hero from '../components/Hero'; // Adjust the path as per your folder structure
import BrandCard from '../components/BrandCard'; // Adjust the path as well
import SlidePanel from '../components/SlidePanel';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Brands Section */}
      <section>
        <BrandCard />
      </section>

      <section>
        <SlidePanel/>
      </section>
    </div>
  );
};

export default Home;
