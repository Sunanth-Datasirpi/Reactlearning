import React from "react";
import Person from "./Person";
// list
export default function PersonList() {
  const persons = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jack", age: 26 },
    { id: 3, name: "Bruce", age: 52 },
  ];
  const namelist = persons.map((person) => (
    <Person key={person.id} personss={person} />
  ));
  return (
    <div>
      <h3>List and keys</h3>
      {namelist}
    </div>
  );
}
