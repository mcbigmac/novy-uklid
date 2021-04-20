import React from "react";
import Person from "./Person";

function Individuals() {
  const people = ["Máma", "Táta", "Kuba", "Matěj"];

  const peopleComponents = people.map((person) => (
    <Person name={person} key={person} />
  ));

  return <div id="individuals">{peopleComponents}</div>;
}

export default Individuals;
