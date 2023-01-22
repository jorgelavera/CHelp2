import { SIGNUP } from "../actions/login.actions";

const initialState = {
  token: null,
  userId: null,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    default:
      return state;
  }
};

export default LoginReducer;