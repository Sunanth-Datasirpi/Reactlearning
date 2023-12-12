import React, { useEffect, useState } from "react";

export default function HookEffectCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("Updating Document");
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      Hook use effect
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}
