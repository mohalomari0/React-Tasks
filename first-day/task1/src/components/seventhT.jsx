import React from "react";

function LoginT() {
  const isLoggedIn = true;

  let content;
  if (isLoggedIn) {
    content = <h2>Welcome back!</h2>;
  } else {
    content = <h2>Please log in to continue.</h2>;
  }

  return (
    <div>
       <h1>Seven<span style={{fontSize:"10px"}}>th7</span> Task</h1>
      {content}
    </div>
  );
}

export default LoginT;
