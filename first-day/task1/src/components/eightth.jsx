import React, { Component } from "react";

class ConditionalRt extends Component {
  render() {
    const isSuccess = true;
    return (
      <div>
         <h1>Eight<span style={{fontSize:"10px"}}>th8</span> Task</h1>


        {isSuccess ? (
          <h2>Success!</h2>
        ) : (
          <h2>Error!</h2>
        )}
      </div>
    );
  }
}

export default ConditionalRt;
