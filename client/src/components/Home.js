import React, { Component } from "react";
import TagList from "./TagList";
import Gallery from "./Gallery";

class Home extends Component {
  render() {
    const { imgs, tags, title } = this.props;
    const finalTitle = title
      ? title.charAt(0).toUpperCase() + title.slice(1) + " pictures"
      : "All Pictures";

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
