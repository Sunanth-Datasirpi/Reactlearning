import React from "react";
//childComponenet sending arguement to ParentComponent using props
export default function (props) {
  return (
    <div>
      <button onClick={() => props.sun("child")}>Greet Parent</button>
    </div>
  );
}
