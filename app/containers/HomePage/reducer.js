import { fromJS } from 'immutable';
import { CHANGE_NAME } from "./actions";

// The initial state of the App
export const initialState = fromJS({
  name: 'oguzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      // Delete prefixed '@' from the github username
      return state.set('user', action.name);
    default:
      return state;
  }
}

export default homeReducer;