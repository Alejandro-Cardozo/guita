import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import ScrollToTop from '../components/UI/ScrollToTop';

import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Info/data';

import { animateScroll as scroll } from 'react-scroll';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const toggleMenuHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleMenuHandler} />
      <Navbar toggle={toggleMenuHandler} scrollNav={scrollNav} toggleHome={toggleHome} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
      <ScrollToTop to='about' toggleHome={toggleHome} scrollNav={scrollNav} />
      <Footer toggleHome={toggleHome} />
    </>
  );
};

export default Home;
