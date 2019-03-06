import { fromJS } from 'immutable';
import { CHANGE_NAME } from "./constants";

// The initial state of the App
export const initialState = fromJS({
  username: 'oguz',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return state.set('username', action.text);
    default:
      return state;
  }
}

export default homeReducer;