import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";
import Login from "./Login";

export default function User() {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h1>User: {userName}</h1>
      <Login/>
    </div>
  );
}
