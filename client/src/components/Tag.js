import React from "react";
import { onTagClick } from "../store/actions";
import { connect } from "react-redux";

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
    <div
      className={classes}
      onClick={e => {
        props.tagClick(props.tag);
      }}
    >
      {props.tag}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag);
