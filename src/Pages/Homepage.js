import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions";
import { useSelector } from "react-redux";
import Card from "../Components/Card";

const Homepage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return <div>{posts.map(i => <Card data={i}/>)}</div>;
};

export default Homepage;
