import React from 'react';

const myName = "Mohammed Al-Omari"

function Displaying() {
    return (
        <div style={{ fontSize:"24px" }}>
            <h1>Third<span style={{fontSize:"10px"}}>3</span> Task</h1>
            I'm {myName}
            <br/>
            say bye bye {myName}
        </div>
    );
  }
  
  export default Displaying;