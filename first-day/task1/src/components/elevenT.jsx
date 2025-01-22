import React from "react";

function Dnumbers() {
  const num = [1, 2, 3, 4, 5]; 

  return (
    <div>
        <h1>Eleven<span style={{fontSize:"10px"}}>th11</span> Task</h1>
      <ul>
        {num.map((number, index) => (
          <li key={index}>
            Doubled {number} = {number * 2}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dnumbers;
