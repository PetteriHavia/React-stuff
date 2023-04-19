import React from "react";
import styled from "styled-components";
import { Container } from "../style/Styles";

const Faq = () => {
  return (
    <FaqSection>
      <h2>
        Any Questions <span>FQA</span>
      </h2>
      <div className="questions">
        <h4>How Do I Start</h4>
        <div className="answer">
          <p>Lorem Ipsum dolor sit amet</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            saepe qui.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem Ipsum dolor sit amet</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            saepe qui.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>Payment methods</h4>
        <div className="answer">
          <p>Lorem Ipsum dolor sit amet</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            saepe qui.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>What Products do you offfer</h4>
        <div className="answer">
          <p>Lorem Ipsum dolor sit amet</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            saepe qui.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </FaqSection>
  );
};

const FaqSection = styled(Container)`
  display: block;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  h4 {
    color: white;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .questions {
    padding: 1.5rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 1.5rem 0rem;
    p {
      padding: 0.5rem 0rem;
    }
  }
`;

export default Faq;
