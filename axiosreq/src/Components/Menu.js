import React, { useEffect, useState } from "react";
import axios from "axios";

function Menu() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/menu").then((res) => {
      setRecords(res.data);
      console.log(records);
    });
  }, []);
  return (
    <div className="menu-container">
      <h1>Hotel Menu</h1>
      <table className="menu-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.name}>
              <td>{record.name}</td>
              <td>{record.description}</td>
              <td>{record.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
