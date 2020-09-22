import React, { Component } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      color: getRandomColor(),
      childrenColor: "#FFF",
    };
  }
  handleColorChange = (newChildrenColor) => {
    // console.log();
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildrenColor,
    });
  };

  render() {
    return (
      <div className="parent" style={{ backgroundColor: this.state.color }}>
        <Child
          color={this.state.childrenColor}
          handleColorChange={this.handleColorChange}
        />
        <Child
          color={this.state.childrenColor}
          handleColorChange={this.handleColorChange}
        />
      </div>
    );
  }
}

export default Parent;
