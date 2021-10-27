const initialState = {
    repos: [],
    loading: true,
};
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

    case 'SAVE_WORKS':
    return {
        ...state,
        repos: action.repos,
        loading: false,
    };
    default:
      return state;
  }
};

export default reducer;