import React from "react";
import { Link } from "react-router-dom";
import grid from "./grid.css";


const Photo = props => {
  const { post, i } = props;
  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/prodcuts/:postId`}>
          <img  src="https://unsplash.it/200?random" height="200" width="200" className="grid-photo" />
        </Link>
        <figcaption>
          <div className="control-buttons">
            <Link className="button" to={`/products/`}>   </Link>
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Photo;