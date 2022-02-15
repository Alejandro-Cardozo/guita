import { useState } from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import { homeObjOne } from '../components/Info/data';
import Navbar from '../components/Navbar';
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
    </>
  );
};

export default Home;
