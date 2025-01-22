import React from "react";



function Lists() {
  const students = ["Omari", "Owais", "Yaqout", "Saba", "Sedrah", "Enas"]; // المصفوفة معرفة داخل المكون

  return (
    <div>
      <h1>Nine<span style={{fontSize:"10px"}}>th9</span> Task</h1>
      <ul>
        <li>{students[0]}</li>
        <li>{students[1]}</li>
        <li>{students[2]}</li>
        <li>{students[3]}</li>
        <li>{students[4]}</li>
        <li>{students[5]}</li>
      </ul>
    </div>
  );
}

export default Lists;





//_________from chat gpt to learn how can i use loop in jsx files...
// function Students() {
//   const students = ["Omari", "Owais", "Yaqout", "Saba", "Sedrah", "Enas"]; // المصفوفة معرفة داخل المكون

//   let studentList = [];
//   for (let i = 0; i < students.length; i++) {
//     studentList.push(<li key={i}>{students[i]}</li>);
//   }

//   return (
//     <div>
//         <h1>Nine<span style={{fontSize:"10px"}}>th9</span> Task</h1>
//         <h2>Student List</h2>
//         <ul>{studentList}</ul>
//     </div>
//   );
// }

// export default Students;
