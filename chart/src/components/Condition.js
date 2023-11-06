import React from "react";
import { useState } from "react";

function Condition() {
  const [condition, setCondition] = useState(false);

  const handleClick = () => {
    setCondition(!condition);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ padding: "10px 20px", fontSize: "16px", borderRadius: "5px" }}
      >
        Conditional rendering
      </button>
      {condition ? <div>Condition is true</div> : <div>Condition is false</div>}
      {condition && <h2>Welcome,Short Circuit operator</h2>}
    </div>
  );
}

export default Condition;
