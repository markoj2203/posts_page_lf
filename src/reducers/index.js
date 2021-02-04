import { combineReducers } from "redux";

const getPostId = (state = "", action) => {
  switch (action.type) {
    case "POST_ID":
      return { ...state, id: action.id };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  getPostId,
});

export default rootReducer;
