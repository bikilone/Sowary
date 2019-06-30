import React from "react";
import { Link } from "react-router-dom";

const GalleryCard = props => {
  const { singleImg, allImgs } = props;
  return (
    <Link to={singleImg.uri}>
      <img src={"http://localhost:5000" + singleImg.uri} alt={singleImg.name} />
    </Link>
  );
};

export default GalleryCard;
