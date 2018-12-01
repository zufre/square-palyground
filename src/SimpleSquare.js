import React from "react";
import "./Square.css";
import PropTypes from "prop-types";

export default function SimpleSquare({ size, color }) {
  const sizeWithPx = `${size}px`;
  const style = {
    width: sizeWithPx,
    height: sizeWithPx,
    backgroundColor: color
  };
  return <div style={style} className="Square" />;
}

SimpleSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired
};

SimpleSquare.defaultProps = {
  color: "green"
};
