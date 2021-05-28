import { GET_POSTS, DELETE_POST, CREATE_POST } from "../constants/action-types";

const initialState = {
  posts: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_POSTS) {
    if (action.payload) {
      state.posts = action.payload;
    }
  } else if (action.type === CREATE_POST) {
    if (action.payload) {
      action.payload.id = String(Math.random());
      state.posts = [action.payload, ...state.posts];
    }
  } else if (action.type === DELETE_POST) {
    if (action.payload) {
      state.posts = state.posts.filter((i) => i.id !== action.payload);
    }
  }
  return state;
}

export default rootReducer;
