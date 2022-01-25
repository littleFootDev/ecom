import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <img src={this.props.img} />
        </div>
        <div>{this.props.name}</div>
        <div>{this.props.price}</div>

      </React.Fragment>
    );
  }
}
