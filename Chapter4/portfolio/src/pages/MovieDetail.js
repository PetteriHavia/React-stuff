import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../Movies";
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const MovieDetails = () => {
  const url = useLocation();
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === url.pathname);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="Movie cover" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award award={award} key={award.title}/> //Do not use Index as key
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

//Loop and display movie information
const Award = ({ award }) => {
  return(
      <AwardStyle>
          <h3>{award.title}</h3>
          <div className="line"></div>
          <p>{award.description}</p>
      </AwardStyle>
  )
}

const Details = styled(motion.div)`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2{
    position: absolute;
    top:10%;
    left:50%;
    transform: translate(-50%, -10%);
  }

  img{
    width:100%;
    height: 70vh;
    object-fit: cover;
  }
  `;

  const Awards = styled.div`
    //min-height: 20vh;
    display: flex;
    margin: 2rem 10rem;
    align-items: center;
    justify-content: space-around;
  `;

  const AwardStyle = styled.div`
    padding: 3.8rem;
    h3{
      font-size: 1.7rem;
    }
    .line{
      width: 50%;
      background: #23d997;
      height: 0.5rem;
      margin: 1rem 0rem;
    }

    p{
      padding: 2rem 0rem;
    }
  `;

  const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
      width:100%;
      height: 100vh;
      object-fit: cover;
    }
  `;

export default MovieDetails;
