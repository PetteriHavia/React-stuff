import React from "react";
//Images
import home1 from "../img/home1.png";
import { Container, Description, Hide, Image } from "../style/Styles";
//Framer Motion
import {motion} from 'framer-motion';
import { titleAnim, fade, photoAnim } from "../animation";
import Wawe from "./Wawe";

const About = () => {


  return (
    <Container>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> your <span>Dreams</span> come</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>True</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us and we will take your ideas and create something unique for
          you.
        </motion.p>
        <motion.button variants={fade}>Contact</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} /*initial="hidden" animate="show"*/ src={home1} alt="Guy with camera" />
      </Image>
      <Wawe />
    </Container>
  );
};

export default About;
