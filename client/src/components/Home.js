import React, { Component } from "react";
import TagList from "./TagList";
import Gallery from "./Gallery";

class Home extends Component {
  render() {
    const { imgs, tags, title, tagsClicked } = this.props;
    const capitalize = string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    let finalTitle = "";
    if (title) {
      finalTitle = capitalize(title) + " Pictures";
    }
    if (!title) {
      finalTitle = "All Pictures";
    }
    if (title && tagsClicked.length > 0) {
      finalTitle =
        capitalize(title) + " & " + capitalize(tagsClicked[0]) + " Pictures";
    }
    if (!title && tagsClicked.length > 0) {
      finalTitle = capitalize(tagsClicked[0]) + " Pictures";
    }
    let numOfPictures = "";
    if (!title) {
      numOfPictures = imgs.length + " pictures";
    } else {
      if (imgs.length === 1) {
        numOfPictures = "One picture of " + title;
      } else {
        numOfPictures = imgs.length + " pictures of " + title;
      }
    }
    return (
      <main className="home">
        <h1 className="section-title">{finalTitle}</h1>
        <div className="line" />
        <p className="pictures-number">{numOfPictures}</p>
        <hr />
        <p>Related Searches:</p>
        <TagList tags={tags} />
        <Gallery imgs={imgs} />
      </main>
    );
  }
}

export default Home;
