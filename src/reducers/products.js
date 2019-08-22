// import * as types from "./../constants/constants";
import data from './../mocks/data';

const initialState = data;

function products(state = initialState, action) {
  switch (action.type) {
    case "TEMP":
      return state;
    default:
      return state;
  }
}

export default products;
