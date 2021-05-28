import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { createPost, getPosts, deletePost } from "../redux/actions";
import { useSelector } from "react-redux";
import Card from "../Components/Card";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import "./styles.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const newPostForm = useRef(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleClickEvent = () => {
    const form = newPostForm.current;
    const body = { id: 1 };

    body.title = form.title.value;
    body.body = form.body.value;

    dispatch(createPost(body));

    form.title.value = "";
    form.body.value = "";
  };

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div className="mainContainer">
      <div className="newPostContainer">
        <h2> New Post</h2>
        <form ref={newPostForm}>
          <TextField label={"Title"} name={"title"} className="inputs" />
          <br />
          <TextField label={"Body"} name={"body"} className="inputs" />
        </form>
        <Button variant="contained" onClick={handleClickEvent}>
          Post
        </Button>
      </div>
      <div className="postsContainer">
        <h3> Posts </h3>
        {posts.map((i) => (
          <Card
            data={i}
            key={i.id}
            deletePost={() => handleDeletePost(i.id)}
            className="post"
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
