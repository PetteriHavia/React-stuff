import React from "react";
//Styling and animation
import styled from "styled-components";
import {motion} from 'framer-motion';
//Redux
import { useDispatch } from "react-redux";
import {loadDetail} from '../actions/detailAction';
//Router
import { Link } from "react-router-dom";
import {smallImage} from '../utils'
import { popUp } from "../animations";

const Game = ({game}) => {
    const stringPathId = game.id.toString(); //Convert pathid to string type to match id for framer motion AnimatePresence
    //Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(game.id));
    }

    return(
        <StyledGame variants={popUp} initial='hidden' animate='show' layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${game.id}`}>
                <div class="name-container">
                    <motion.h3 layoutId={`title ${game.id}`}>{game.name}</motion.h3>
                    <h3>{game.released}</h3>
                </div>
                <motion.img layoutId={`ìmage ${stringPathId}`} src={smallImage(game.background_image, 640)} alt={game.name} />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
        height: 30vh;
        object-fit: cover;
    }

    .name-container{
        max-height: 100px;
       height: 100%;
    }
`;

export default Game;