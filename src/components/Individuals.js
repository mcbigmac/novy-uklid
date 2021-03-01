import React from "react";
import Person from "./Person";

function Individuals(props) {
  let todos = props.todos;

   
  return (
    <div id="individuals">
      <Person
        name="Máma"
        todos={todos.mama}
        completed={props.completed}
        zobrazTyden={props.zobrazTyden}
        prepisDoTydennich = {props.prepisDoTydennich}
      />
      <Person
        name="Táta"
        todos={todos.tata}
        completed={props.completed}
        zobrazTyden={props.zobrazTyden}
        prepisDoTydennich = {props.prepisDoTydennich}
      />
      <Person
        name="Kuba"
        todos={todos.kuba}
        completed={props.completed}
        zobrazTyden={props.zobrazTyden}
        prepisDoTydennich = {props.prepisDoTydennich}
      />
      <Person
        name="Matěj"
        todos={todos.matej}
        completed={props.completed}
        zobrazTyden={props.zobrazTyden}
        prepisDoTydennich = {props.prepisDoTydennich}
      />
    </div>
  );
}

export default Individuals;
