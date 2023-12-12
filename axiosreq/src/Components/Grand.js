import React, { useContext } from "react";
import { AppContext } from "./Context";

function Grand() {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      Grand
      <button
        onClick={() => {
          setUserName("Hello,Welcome to website");
        }}
      >
        Change
      </button>
    </div>
  );
}

export default Grand;
