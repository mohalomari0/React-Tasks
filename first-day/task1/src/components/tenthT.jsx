import React from "react";

function ListsM() {
  const students = ["Omari", "Owais", "Yaqout", "Saba", "Sedrah", "Enas"]; // المصفوفة داخل المكون

  return (
    <div>
        <h1>Ten<span style={{fontSize:"10px"}}>th10</span> Task</h1>
        <ul>
        {students.map((student, index) => (
            <li key={index} style={{backgroundColor:"orangered" , margin:"10px", padding:"15px"}}>{student}</li>
        ))}
        </ul>
    </div>
  );
}

export default ListsM;
