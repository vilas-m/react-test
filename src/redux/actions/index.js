import { GET_POSTS, DELETE_POST, CREATE_POST } from "../constants/action-types";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export function getPosts() {
  return (dispatch) => {
    dispatch({ type: GET_POSTS });
    return axios.get(`${BASE_URL}/posts`).then((posts) => {
      dispatch({ type: GET_POSTS, payload: posts.data });
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    dispatch({ type: DELETE_POST });
    return axios.delete(`${BASE_URL}/posts/${id}`).then((response) => {
      dispatch({ type: DELETE_POST, payload: id });
    });
  };
}

export function createPost(body) {
  return (dispatch) => {
    dispatch({ type: CREATE_POST });
    return axios.post(`${BASE_URL}/posts`, body).then((response) => {
      dispatch({ type: CREATE_POST, payload: response.data });
    });
  };
}
