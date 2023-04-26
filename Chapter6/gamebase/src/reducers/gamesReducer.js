//State
const initState = {
    popular : [],
    newGames : [],
    upComing : [],
    searched : [],
}

//Reducer
const gamesReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_GAMES":
            return {...state, 
                popular: action.payload.popular,
                upComing: action.payload.upComing,
                newGames: action.payload.newGames,
            }
        case "FETCH_SEARCH":
            return {
                ...state,
                searched: action.payload.searched,
            }
        case "CLEAR_SEARCH":
            return {
                ...state,
                searched: [],
            }        
        default:
            return {...state}
    }

}


export default gamesReducer;