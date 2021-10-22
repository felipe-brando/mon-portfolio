const initialState = {
    burgerOpen: false,
};
  
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'BURGER_TOGGLE_OPEN':
      return {
        ...state,
        burgerOpen: !state.burgerOpen,
      };
    case 'MOBILE_MENU_CLOSE':
      return {
        ...state,
        burgerOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;