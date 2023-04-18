import React from "react";
//Images
import home1 from "../img/home1.png";
//Styled
import styled from 'styled-components';
import { Container, Description, Hide, Image } from "../style/Styles";

const About = () => {
  return (
    <Container>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>Dreams</span> come{" "}
            </h2>
          </Hide>
          <Hide>
            <h2>True</h2>
          </Hide>
        </div>
        <p>
          Contact us and we will take your ideas and create something unique for
          you.
        </p>
        <button>Contact</button>
      </Description>
      <Image>
        <img src={home1} alt="Guy with camera" />
      </Image>
    </Container>
  );
};


export default About;
