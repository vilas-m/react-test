import { GET_POSTS, DELETE_POST, CREATE_POST } from "../constants/action-types";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export function getPosts() {
  return (dispatch) => {
    dispatch({ type: GET_POSTS });
    return axios.get(`${BASE_URL}/posts`).then((posts) => {
      console.log(":::: ", posts);
      dispatch({ type: GET_POSTS, payload: posts });
    });
  };
}

export function deletePost(payload) {
  return { type: DELETE_POST, payload };
}

export function createPost(payload) {
  return { type: CREATE_POST, payload };
}
