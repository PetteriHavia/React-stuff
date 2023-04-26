import React, { useEffect } from "react";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//Styling and animation
import styled from "styled-components";
import { motion, AnimatePresence} from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

const Home = () => {
  //Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  
  //Fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get data from state
  const { popular, newGames, upComing, searched } = useSelector((state) => state.games);

  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      <AnimatePresence type="crossfade">
        {pathId && <GameDetail pathId={pathId}/>}
      </AnimatePresence>
      {searched.length ?  (
        <div className="Searched">
          <h2>Search Results</h2>
          <Games>
            {searched.map((game) => (
              <Game game={game} key={game.id} />
            ))}
          </Games>
        </div>
      ) : ("")
      }
      <h2>Upcoming Games</h2>
      <Games>
        {upComing.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 768px) {
    padding: 0rem 2rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(450px, 1fr)); //repeat 350 minimun space for column, if not enough space then take rest of the space with 1fr
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));

    h3{
      font-size:1rem;
    }
  }
`;

export default Home;
