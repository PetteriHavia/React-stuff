import React, {useState} from "react";
import styled from "styled-components";
import { Container } from "../style/Styles";
import Toggle from "./ToggleOn";
import {motion, LayoutGroup} from 'framer-motion';
import { UseScroll } from "./UseScroll";
import { fade } from "../animation";

const Faq = () => {
  const [element, controls] = UseScroll();
  return (
    <FaqSection variants={fade} ref={element} animate={controls} initial="hidden">
      <h2>
        Any Questions <span>FQA</span>
      </h2>
      <LayoutGroup>
      <Toggle title='How Do I Start'>
        <div className="answer">
          <p>Lorem Ipsum dolor sit amet</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            saepe qui.
          </p>
        </div>
      </Toggle>
      <Toggle title='Daily Schedule'>
        <div className="answer">
          <p>Lorem Ipsum dolor sit amet</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            saepe qui.
          </p>
        </div>
      </Toggle>
      <Toggle title='Payment methods'>
        <div className="answer">
          <p>Lorem Ipsum dolor sit amet</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            saepe qui.
          </p>
        </div>
      </Toggle>
      <Toggle title='What Products do you offfer'>
        <div className="answer">
          <p>Lorem Ipsum dolor sit amet</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            saepe qui.
          </p>
        </div>
      </Toggle>
      </LayoutGroup>
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
