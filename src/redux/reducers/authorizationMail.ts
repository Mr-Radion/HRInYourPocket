const initialState = {
  // items: [],
  // isLoaded: false,
};

const authorizationMail = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_AUTH_MAIL':
      return {
        ...state,
        // items: action.payload,
        // isLoaded: true,
      };
    case 'SET_LOADING':
      return {
        ...state,
        // isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default authorizationMail;
