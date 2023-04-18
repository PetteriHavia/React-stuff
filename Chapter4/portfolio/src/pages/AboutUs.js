import React from "react";
//Components
import About from "../components/About";
import Services from "../components/Services";
import Faq from '../components/Faq';

const AboutUs = () => {
  return (
    <div className="container">
      <About />
      <Services />
      <Faq />
    </div>
  );
};

export default AboutUs;
