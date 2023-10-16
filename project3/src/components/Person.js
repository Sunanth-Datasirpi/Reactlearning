import React from "react";

function Person({ personss }) {
  return (
    <div>
      <h4>
        I am {personss.name} and my age is {personss.age}
      </h4>
    </div>
  );
}

export default Person;
