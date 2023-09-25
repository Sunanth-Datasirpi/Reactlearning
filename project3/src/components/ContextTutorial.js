import React, { createContext, useContext, useState } from "react";
import User from "./User";
import Login from "./Login";
export const AppContext = createContext(null);

export default function () {
  const [userName, setUserName] = useState("");
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Login userName={userName} />
      <User setUserName={setUserName} />
    </AppContext.Provider>
  );
}
