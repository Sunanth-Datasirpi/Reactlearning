import React from "react";
//event handling in function
export default function FunctionClick() {
  function clicked() {
    alert("The button is clicked");
  }

  return (
    <div>
      <button onClick={clicked}>Click Here</button>
    </div>
  );
}
