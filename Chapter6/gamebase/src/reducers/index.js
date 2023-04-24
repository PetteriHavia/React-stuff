import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import detailReducer from './detailReducer';

//Combine all reducers and export to Index.js
const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,

});

export default rootReducer;