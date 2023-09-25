import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

const reduce = (state, actions) => {
  switch (actions.type) {
    case "Increment":
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case "Text":
      return {
        count: state.count,
        showText: !state.showText,
      };
    default:
      return state;
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reduce, { count: 0, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "Text" });
        }}
      >
        Increase
      </button>
      {/* conditional rendering using short circuit operator */}
      {state.showText && <p>Click the button to increase value</p>}
    </div>
  );
}
