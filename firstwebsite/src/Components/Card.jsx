import React, { useEffect, useState } from "react";
import axios from "axios";

function Card() {
  const [menu, setMenu] = useState([]);

  const jsonFileURL = () => {
    axios.get("http://localhost:3000/items").then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h1>Hotel Menu</h1>
      {menu ? (
        <ul>
          {menu.items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <img
                src={item.image}
                alt={item.name}
                style={{ maxWidth: "200px" }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Card;
