import React from "react";
//session storage

function SessionStorage() {
  sessionStorage.setItem("id", 7);
  return <div>Value from SessionStorage {sessionStorage.getItem("id")}</div>;
}

export default SessionStorage;
