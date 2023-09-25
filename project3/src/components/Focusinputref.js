import React, { useRef, useState } from "react";

export default function Focusinputref() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <label>Name:</label>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>My name is {name}</div>
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
