import styled from "styled-components";
import {motion} from 'framer-motion';

//Styled components
export const Container = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  //color: white;
  @media (max-width: 1300px) {
        display: block;
        padding: 1rem;
        text-align: center;
      }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2{
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
        padding:0;

        button{
          margin: 2.5rem 0rem;
        }
        p{
          padding: 2.5rem 0rem 1rem 0rem;
        }
      }
`;

export const Image = styled.div`
  flex:1;
  overflow: hidden;
  z-index: 2;
  img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;