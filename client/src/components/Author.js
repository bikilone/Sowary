import React from "react";

const Author = props => {
  return (
    <div className="author">
      <img
        className="author-img"
        src="https://i.pinimg.com/originals/05/4a/d7/054ad75024d0859164e8e9dfaf611aba.jpg"
        alt="author"
      />
      <div className="author-detail">
        <span className="author-name">{props.name}</span>
        <button className="follow-author">Follow</button>
      </div>
    </div>
  );
};

export default Author;
