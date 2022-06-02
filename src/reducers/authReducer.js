const initState = {
  status: false,
  user: {},
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_AUTH_TRUE":
      return {
        ...state,
        status: true,
      };
    case "SET_AUTH_FALSE":
      return {
        ...state,
        status: false,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
