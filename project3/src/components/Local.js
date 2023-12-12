import React from "react";
//local storage
function Local() {
  localStorage.setItem("id", 1);
  return <div>Value from Local Storage {localStorage.getItem("id")}</div>;
}

export default Local;
