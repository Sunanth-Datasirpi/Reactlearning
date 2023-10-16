import React, { createContext, useState } from "react";
import axios from "axios";
export const { Context } = createContext(null);

function Axiosapi() {
  const [joke, setJoke] = useState("");
  const getjoke = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        console.log(response);
        setJoke(response.data.setup + " ... " + response.data.punchline);
      });
  };
  return (
    <div>
      <button onClick={getjoke}>Click to get Joke</button>
      {joke}
    </div>
  );
}

export default Axiosapi;
