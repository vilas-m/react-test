import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { createPost, getPosts, deletePost } from "../redux/actions";
import { useSelector } from "react-redux";
import Card from "../Components/Card";

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

    console.log(": : :", form, body);
    dispatch(createPost(body));
  };

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      <div>
        <form ref={newPostForm}>
          <input label={"Title"} name={"title"} />
          <br />
          <textarea label={"Body"} name={"body"} />
        </form>
        <button onClick={handleClickEvent}>Post</button>
      </div>
      {posts.map((i) => (
        <Card data={i} key={i.id} deletePost={() => handleDeletePost(i.id)} />
      ))}
    </div>
  );
};

export default Homepage;
