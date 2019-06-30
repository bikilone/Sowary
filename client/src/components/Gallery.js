import React from "react";
import GalleryCard from "./GalleryCard";

const Gallery = props => {
  return (
    <div className="gallery">
      {props.imgs.map((img, i) => (
        <GalleryCard singleImg={img} key={i} allImgs={props.imgs} />
      ))}
    </div>
  );
};

export default Gallery;
