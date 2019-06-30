import React from "react";
import Tag from "./Tag";

const TagList = props => {
  return (
    <div className="tag-list">
      {props.tags.map((tag, i) => (
        <Tag tag={tag} key={i} />
      ))}
    </div>
  );
};

export default TagList;
