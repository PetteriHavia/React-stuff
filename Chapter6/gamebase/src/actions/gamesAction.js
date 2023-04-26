import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGamesURL());
    const upComingData = await axios.get(upcomingGamesURL());
    const newGames = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upComing: upComingData.data.results,
            newGames: newGames.data.results,
        },
    });
};


export const fetchSearch = (game_name) => async(dispatch) => {
    const gameSearched = await axios.get(searchGameURL(game_name));
    dispatch({
        type: "FETCH_SEARCH",
        payload: {
            searched: gameSearched.data.results,
        },
    });
};