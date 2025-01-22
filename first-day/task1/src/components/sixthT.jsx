import React from "react";
import styles from "../styling/styles.json";

function ByJson(){
  return (
    <div>
        <h1>Six<span style={{fontSize:"10px"}}>th6</span> Task</h1>
      <p style={styles.con1}>First Changing</p>
      <p style={styles.con2}>Second Changing</p>
    </div>
  );
};

export default ByJson;
