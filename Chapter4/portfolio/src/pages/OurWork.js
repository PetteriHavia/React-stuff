import React from "react";
import {Link, useLocation} from 'react-router-dom';
import styled from "styled-components";
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//Animations
import { motion} from 'framer-motion';
import { pageAnimation, fade, photoAnim, LineAnim, Slider, SliderContainer  } from '../animation';

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
        <motion.div variants={SliderContainer}>
            <Frame1 variants={Slider}></Frame1>
            <Frame2 variants={Slider}></Frame2>
            <Frame3 variants={Slider}></Frame3>
            <Frame4 variants={Slider}></Frame4>
        </motion.div>
        <Movie>
            <motion.h2 variants={fade}>The Athlete</motion.h2>
            <motion.div variants={LineAnim} className="line"></motion.div>
            <Link to="/work/the-athlete">
                <Hide>
                    <motion.img variants={photoAnim} src={athlete} alt="athlete"/>
                </Hide>
            </Link>
        </Movie>
        <Movie>
            <h2>The Racer</h2>
            <div className="line"></div>
            <Link to="/work/the-racer">
                <img src={theracer} alt="racer"/>
            </Link>
        </Movie>
        <Movie>
            <h2>Good Times</h2>
            <div className="line"></div>
            <Link to="/work/good-times">
                <img src={goodtimes} alt="goodtimes"/>
            </Link>
        </Movie>
      <h1>Our Work</h1>
    </Work>
  );
};


const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    
    h2{
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;

    .line{
        height: .5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow:hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index:2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;



export default OurWork;
