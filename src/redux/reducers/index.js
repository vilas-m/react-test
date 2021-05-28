import { GET_POSTS } from "../constants/action-types";
import { DELETE_POST } from "../constants/action-types";
import { CREATE_POST } from "../constants/action-types";

const initialState = {
  posts: [],
  count: 0,
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_POSTS) {
    console.log(":::: >>>> ", action.payload)
    state.posts = action.payload || [];
  }
  return state;
}

export default rootReducer;
