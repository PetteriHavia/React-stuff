import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar{
            width: .5rem;
        }

        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
    }

    body{
        font-family: 'Montserrat', sans-serif;
    }

    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface';
        font-weight: lighter;
        color: #333;
    }

    h3{
        font-size: 1.3rem;
        color: #333;
        padding: .7rem 0rem .7rem 0rem; 
    }

    p{
        font-size: 1.2rem;
        line-height: 1.5;
        color: #696969;
    }
    
    a{
        text-decoration: none;
        color: #333;
    }
`;

export default GlobalStyle;