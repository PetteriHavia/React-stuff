const initialState = {
  detail: {},
  screen: {},
};

const detailReducer = (state=initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.detail,
        screen: action.payload.screen,
      };
    default:
      return { ...state };
  }
};



export default detailReducer;
