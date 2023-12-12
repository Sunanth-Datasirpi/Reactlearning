import React, { createContext, useState } from "react";
import Child from "./Child";

export const AppContext = createContext(null);

function Context() {
  const [username, setUserName] = useState("Welcome");
  return (
    <AppContext.Provider value={{ username, setUserName }}>
      <div>
        <Child />
      </div>
    </AppContext.Provider>
  );
}

export default Context;
