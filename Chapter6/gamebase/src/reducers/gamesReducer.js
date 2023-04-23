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
            return {...state, popular: action.payload.popular}
        default:
            return {...state}
    }

}


export default gamesReducer;