import React, { Component } from "react";
import SimpleSquare from "./SimpleSquare";
import "./App.css";
import Square from "./Square";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleSquare color="blue" size={50} />
        <Square initialColor="red" />
        <Square initialColor="grey" />
      </div>
    );
  }
}

export default App;
