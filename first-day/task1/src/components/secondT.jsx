import React, { Component } from 'react';

class Position extends Component {
  render() {
    const myPosition = "N-O-P";
    return (
        <div>
          <h1>Second<span style={{fontSize:"10px"}}>2</span> Task</h1>
          <h3>{myPosition}</h3>
          <h3 style={{ color: "red" }}>It's Mean None Of Position</h3>
        </div>
    );
  }
}

export default Position;
