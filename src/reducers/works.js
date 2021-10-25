const initialState = {
    repos: []
    
};
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

    case 'SAVE_WORKS':
    return {
        ...state,
        repos: action.repos,
    };
    default:
      return state;
  }
};

export default reducer;