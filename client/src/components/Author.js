import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { onAuthorClick } from "../store/actions";

const mapDispatchToProps = dispatch => {
  return {
    onAuthorClick: author => dispatch(onAuthorClick(author))
  };
};

const Author = props => {
  return (
    <Link
      to="/pictures"
      className="author"
      onClick={() => props.onAuthorClick(props.name)}
    >
      <img
        className="author-img"
        src="https://i.pinimg.com/originals/05/4a/d7/054ad75024d0859164e8e9dfaf611aba.jpg"
        alt="author"
      />
      <div className="author-detail">
        <span className="author-name">{props.name}</span>
        <button className="follow-author">Follow</button>
      </div>
    </Link>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Author);
