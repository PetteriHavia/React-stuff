import React from "react";
//Styled
import styled from "styled-components";
//Router
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <StyledNav>
      <Link id="logo" to="/">
        <h1>Frame</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
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
  background-color: "#282828";

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
`;

export default Navigation;
