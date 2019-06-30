import React from "react";
import { connect } from "react-redux";
import { onSearch } from "../store/actions";
import { Link } from "react-router-dom";
const mapStateToProps = state => {
  return {
    searchField: state.searchImgs.searchField
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(onSearch(event.target.value))
  };
};

const Navbar = props => {
  return (
    <div className="nav">
      <Link to="/pictures" className="brand">
        <i className="fas fa-camera-retro brand-logo" />
        <h3 className="brand-title">SOWARY</h3>
      </Link>
      <div className="nav-search">
        <input
          type="text"
          className="nav-search-input"
          onChange={props.onSearchChange}
          value={props.searchField}
        />
        <i className="fas fa-search nav-search-icon" />
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
