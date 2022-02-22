import React, { Component } from "react";
import "./Clicker.css";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.genRandom = this.genRandom.bind(this);
  }

  genRandom() {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: rand });
  }
  render() {
    return (
      <div>
        <h1 className="Clicker-h1">Clicker</h1>
        <h3 className="Clicker-h3">You need the number 7 to win!</h3>
        <h2 className="Clicker-h2">Current Number is: {this.state.num}</h2>

        {this.state.num === 7 ? (
          <h2>YOU WIN!</h2> && (
            <img
              className="Clicker-img"
              src="https://media0.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif?cid=ecf05e472mj3vwg31metf43qxubnl1g1zzr9kk88p66rc43c&rid=giphy.gif&ct=g"
            />
          )
        ) : (
          <button className="Clicker-button" onClick={this.genRandom}>
            Click for Random Number
          </button>
        )}
      </div>
    );
  }
}

export default Clicker;
