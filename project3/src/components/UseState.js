import React, { useState } from "react";

export default function UseState() {
  const [inputvalue, setinputvalue] = useState("UseState");
  const handletext = (event) => {
    let newvalue = event.target.value;
    setinputvalue(newvalue);
  };
  return (
    <div>
      <input placeholder="Enter something......" onChange={handletext} />
      {inputvalue}
    </div>
  );
}
