import React from "react";
import Photo from "./Photo";


const Single = props => {
  const { postId } = props.match.params;
  const i = props.posts.findIndex(post => post.code === postId);
  const post = props.posts[i];


  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />

    </div>
  );
};

export default Single;