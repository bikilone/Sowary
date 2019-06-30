import React from "react";

const PriceSlot = props => {
  let classes = "price-slot";
  if (props.extended) {
    classes += " extended";
  }
  return (
    <div className={classes}>
      <div className="price">$ {props.price}</div>
      {props.size && <div className="size">{props.size}</div>}
      {!props.size && <div className="market-freeze">Market Freeze</div>}
    </div>
  );
};

export default PriceSlot;
