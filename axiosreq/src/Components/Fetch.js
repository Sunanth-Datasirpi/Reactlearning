import React, { useState } from "react";

function Fetch() {
  const [joke, setJoke] = useState("");
  const getjoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => setJoke(data.setup + " ... " + data.punchline));
  };
  return (
    <div>
      <button onClick={getjoke}>Click to get Joke</button>
      {joke}
    </div>
  );
}

export default Fetch;
