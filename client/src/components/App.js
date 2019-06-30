import React, { Component } from "react";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";
import ImageDetail from "./ImageDetail";
import Footer from "./Footer";
import { fetchImgs } from "../store/actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    imgs: state.fetchImgs.imgs,
    isPending: state.fetchImgs.isPending,
    error: state.fetchImgs.error,
    tags: state.fetchImgs.tags,
    searchField: state.searchImgs.searchField,
    authors: state.fetchImgs.authors,
    tagsClicked: state.onTagClick.tagsClicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchImgs: () => dispatch(fetchImgs())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onFetchImgs();
  }
  render() {
    const { imgs, searchField, isPending, tagsClicked } = this.props;

    const filteredImgs = imgs.filter(img => {
      const filteredNames = img.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
      const fitleredTags = img.tags.includes(searchField.toLowerCase());
      const filteredAuthors = img.author
        .toLowerCase()
        .includes(searchField.toLowerCase());
      let filteredByTagsClicked = true;
      if (tagsClicked.length > 0) {
        filteredByTagsClicked = img.tags.some(
          tag => tagsClicked.indexOf(tag) >= 0
        );
      }

      return (
        (filteredNames || fitleredTags || filteredAuthors) &&
        filteredByTagsClicked
      );
    });

    const uniqueTags = [];
    filteredImgs.forEach(picture => {
      // filtering out tags that already exists in tag array
      const newTags = picture.tags.filter(tag => !uniqueTags.includes(tag));
      uniqueTags.push(...newTags);
    });

    return (
      <div>
        <Navbar />

        <Switch>
          <Route
            exact
            path="/pictures"
            render={() => (
              <Home imgs={filteredImgs} tags={uniqueTags} title={searchField} />
            )}
          />
          <Route
            path="/picture/:id"
            render={props => <ImageDetail imgs={imgs} {...props} />}
          />
          <Redirect from="/" to="/pictures" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
