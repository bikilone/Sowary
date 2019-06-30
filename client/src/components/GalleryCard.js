import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const GalleryCard = props => {
  const { singleImg } = props;
  const toolTip = `${singleImg.name} 
                    <br>
                  ${singleImg.author}
  `;
  return (
    <Link to={singleImg.uri}>
      <ReactTooltip />
      <img
        src={"http://localhost:5000" + singleImg.uri}
        alt={singleImg.name}
        data-tip={toolTip}
        data-multiline={true}
      />
    </Link>
  );
};

export default GalleryCard;
