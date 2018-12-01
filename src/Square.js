import React from "react";
import "./Square.css";
import PropTypes from "prop-types";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: this.props.initialColor
    };
  }
  setCurrentColor(currentColor) {
    this.setState({
      currentColor
    });
  }
  render() {
    let textInput;

    const style = {
      width: "100px",
      height: "100px",
      backgroundColor: this.state.currentColor
    };
    return (
      <div style={style} className="Square">
        <div className="SquareControls">
          <input
            ref={element => {
              textInput = element;
            }}
            type="text"
            placeholder="Color..."
          />
          <button
            onClick={() => {
              this.setCurrentColor(textInput.value);
            }}
          >
            Ok
          </button>
        </div>
      </div>
    );
  }
}

Square.propTypes = {
  initialColor: PropTypes.string
};

Square.defaultProps = {
  initialColor: "green"
};
