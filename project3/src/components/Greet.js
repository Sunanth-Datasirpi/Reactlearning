import React from "react";
//function component
export const Greet = (props) => {
  const { name, colour } = props; //function props destructuring
  return (
    <div>
      <h1>
        Hello {name}. Your Favourite colour is {colour}
      </h1>
      {props.children}
    </div>
  );
};
