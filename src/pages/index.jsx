import { useState } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Info from '../components/Info';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Info/data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleMenuHandler} />
      <Navbar toggle={toggleMenuHandler} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
