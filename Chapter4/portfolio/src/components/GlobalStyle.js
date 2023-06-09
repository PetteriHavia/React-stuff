import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}

body{
    background-color: #1b1b1b;
    font-family: 'Inter', sans-serif;
}

html {
    @media (max-width: 1700px) {
        font-size: 70%;
    }
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #2ba779;
        color: white;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
    color: white;
}

h3{
    color: white;
}

h4{
    font-weight: bold;
    font-size: 2rem;
}

span{
    font-weight: bold;
    color: #23d997;
}

a{
    font-size: 1.1rem;
}
    
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

`

export default GlobalStyle;