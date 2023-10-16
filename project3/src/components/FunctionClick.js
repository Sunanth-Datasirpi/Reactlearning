import React from "react";
//event handling in function
export default function FunctionClick() {
  function clicked(event) {
    console.log(event);
    alert("The button is clicked");
  }

  return (
    <div>
      Function Click
      <button onClick={clicked}>Click Here</button>
    </div>
  );
}
