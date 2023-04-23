import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';

//Combine all reducers and export to Index.js
const rootReducer = combineReducers({
    games: gamesReducer,
});

export default rootReducer;