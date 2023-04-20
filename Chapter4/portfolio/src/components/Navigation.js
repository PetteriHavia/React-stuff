import React from "react";
//Styled
import styled from "styled-components";
//Router
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

const Navigation = () => {
  const {pathname} = useLocation();
  return (
    <StyledNav>
      <Link id="logo" to="/">
        <h1>Frame</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{width: pathname === '/' ? "50%" : "0%"}}/>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{width: pathname === '/work' ? "50%" : "0%"}}/>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line transition={{ duration: 0.75 }} initial={{ width: '0%' }} animate={{width: pathname === '/contact' ? "50%" : "0%"}}/>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 20;

  ul {
    display: flex;
    color: white;
    text-decoration: none;
    list-style: none;
  }

  h1 {
    font-family: "Lobster", cursive;
    color: white;
    font-size: 1.5rem;
    font-weight: lighter;
    cursor: pointer;
  }

  li {
    padding-left: 5rem;
    position: relative;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 1rem;

    ul {
      padding: 2rem 0rem 1.5rem 0rem;
      justify-content: space-around;
      width: 80%;
      li {
        padding: 0rem 0.5rem;
      }
    }
  }

  @media (max-width: 600px) {
    ul{
      width: 100%;
    }
  }
`;

const Line = styled(motion.div)`
  height: .3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -50%;
  left: 50%;
`;

export default Navigation;
