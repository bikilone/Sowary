import React, { Component } from "react";
import Author from "./Author";
import TagList from "./TagList";
import PriceSlot from "./PriceSlot";

import { Link } from "react-router-dom";
import { fetchImgs, findSingleImg } from "../store/actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    imgs: state.fetchImgs.imgs,
    isPending: state.fetchImgs.isPending,
    error: state.fetchImgs.error,
    selectedImg: state.findSingleImg.selectedImg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchImgs: () => dispatch(fetchImgs()),
    onFindSingleImg: (pictures, imgUri) =>
      dispatch(findSingleImg(pictures, imgUri))
  };
};

class ImageDetail extends Component {
  componentDidMount() {
    const imgUri = this.props.match.url;
    if (this.props.imgs.length > 0) {
      this.props.onFindSingleImg(this.props.imgs, imgUri);
    }
  }

  componentDidUpdate() {
    const imgUri = this.props.match.url;
    if (this.props.imgs.length > 0) {
      this.props.onFindSingleImg(this.props.imgs, imgUri);
    }
  }

  render() {
    const imgUri = "http://localhost:5000" + this.props.match.url;
    const {
      author,
      name,
      description,
      tags,
      exclusive,
      price
    } = this.props.selectedImg;
    const priceSlots = Object.values(price);
    const priceSizes = Object.keys(price);
    console.log(exclusive.isSold);

    return (
      <div className="detail-page">
        <img src={imgUri} className="detail-page-img" alt={name} />
        <div className="detail-page-about">
          <Link to="/pictures" className="back">
            <i className="fas fa-chevron-left back-button" />
            <span>Back to Results</span>
          </Link>

          <Author name={author} />
          <h1 className="img-title">{name}</h1>
          <p className="img-description">{description}</p>
          <TagList tags={tags} />
          <hr />
          <div className="price-slots">
            {priceSlots.map((price, i) => (
              <PriceSlot price={price} key={i} size={priceSizes[i]} />
            ))}
          </div>
          <h1 className="exclusively">Use this image exclusively for:</h1>
          <PriceSlot
            price={exclusive.price}
            extended={true}
            isSold={exclusive.isSold}
          />
          <p className="exclusive-rights">
            Protect your work by licensing the exclusive rights to our images
            with Market Freeze
          </p>
          <hr />
          <button className="add-to-cart" disabled={exclusive.isSold}>
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageDetail);
