import React from "react";
import { onTagClick } from "../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return {
    tagsClicked: state.onTagClick.tagsClicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tagClick: tag => dispatch(onTagClick(tag))
  };
};

const Tag = props => {
  let classes = "tag";
  if (props.tagsClicked.find(tag => tag === props.tag)) {
    classes += " clicked";
  }
  return (
    <Link
      to="/pictures"
      className={classes}
      onClick={e => {
        props.tagClick(props.tag);
      }}
    >
      {props.tag}
    </Link>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag);
