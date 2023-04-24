import React from "react";
//Styling and animation
import styled from "styled-components";
import {motion} from 'framer-motion';
//Redux
import { useDispatch } from "react-redux";
import {loadDetail} from '../actions/detailAction';

const Game = ({game}) => {

    //Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(game.id));
    }

    return(
        <StyledGame onClick={loadDetailHandler}>
            <h3>{game.name}</h3>
            <h3>{game.released}</h3>
            <img src={game.background_image} alt={game.name} />
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    img{
        width: 100%;
        height: 30vh;
        object-fit: cover;
    }
`;

export default Game;