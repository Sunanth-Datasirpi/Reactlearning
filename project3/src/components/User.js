import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

export default function User() {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h1>User: {userName}</h1>
    </div>
  );
}
