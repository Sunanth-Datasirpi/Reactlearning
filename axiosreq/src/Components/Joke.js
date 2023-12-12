import React, { useContext } from "react";
import { Context } from "./Axiosapi";

function Joke() {
  const { joke } = useContext(Context);
  return <div>{joke}</div>;
}

export default Joke;
