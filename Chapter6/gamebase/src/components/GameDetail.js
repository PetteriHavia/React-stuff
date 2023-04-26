import React from "react";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../utils";
//Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import nintendo from "../img/nintendo.svg";
import xbox from "../img/xbox.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import playstation5 from "../img/playstation5.svg";
import seriesXS from "../img/seriesx.svg";
import android from "../img/android.svg";
import starFull from "../img/star-full.png";
import starEmpty from "../img/star-empty.png";

const GameDetail = ({ pathId }) => {
  //Get data from state
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  const navigate = useNavigate();

  //Exit detail panel
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  //Get platform logos
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation5;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return seriesXS;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      case "PC":
        return steam;
      case "Android":
        return android;
      default:
        return gamepad;
    }
  };

  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>{game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms?.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt="platform"
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`ìmage ${game.id}`}
                src={smallImage(game.background_image, 1280)}
                alt="Game Background"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results?.map((img) => (
                <img
                  src={smallImage(img.image, 1280)}
                  key={img.id}
                  alt="screenshots"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 3rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 3rem 0rem;
`;

export default GameDetail;
