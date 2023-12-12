import React, { useContext } from "react";
import Grand from "./Grand";
import { AppContext } from "./Context";

function Child() {
  const { username } = useContext(AppContext);
  return (
    <div>
      Child -{username}
      <Grand />
    </div>
  );
}

export default Child;
