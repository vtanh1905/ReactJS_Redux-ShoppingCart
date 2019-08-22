import * as types from "./../constants/constants";

const initialState = "Ready to buy products";

function notify(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_NOTIFY:
      return action.message;
    default:
      return state;
  }
}

export default notify;
