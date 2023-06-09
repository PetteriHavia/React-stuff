import React from "react";
//Icons/Images
import clock from "../img/clock.svg";
import dia from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styled
import styled from "styled-components";
import { Container, Description, Hide, Image } from "../style/Styles";
import { UseScroll } from "./UseScroll";
import {fade} from '../animation';

const Services = () => {
  const [element, controls] = UseScroll();
  return (
    <ServicesSection variants={fade} animate={controls} initial="hidden" ref={element}>
      <SectionDesc>
        <div>
         <h2>High<span>Quality</span>Services</h2>
        </div>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem Ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={dia} alt="Dia" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem Ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem Ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Money" />
              <h3>Money</h3>
            </div>
            <p>Lorem Ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </SectionDesc>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </ServicesSection>
  );
};

const ServicesSection = styled(Container)`
  flex-direction: row-reverse;
  justify-content: space-between;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }

  @media (max-width: 600px) {
    h2{
      font-size: 2.5rem;
    }

    p{
        width: 100%;
      }
  }
`;

const SectionDesc = styled(Description)`
  padding-right: 0rem;
  padding-left: 5rem;
  @media (max-width: 1300px) {
      padding: 0rem;
    }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
      justify-content: center;
    }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
      border-radius: 8px;
    }

    @media (max-width: 1300px) {
        justify-content: center;
      }
  }
`;

export default Services;
