import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function FormCell(props) {
  const [background, setBackground] = useState({ backgroundColor: "white" });
  const dispatch = useDispatch();
  const people = props.people;

  let completedBackground = { backgroundColor: "rgba(255,255,255,0)" };
  if (props.todo.completed) {
    completedBackground = { backgroundColor: "rgba(255,255,255,0.7)" };
  }

  const inputList = people.map((person) => (
    <td className="radioContainer" style={completedBackground} key={person}>
      <input
        type="radio"
        value={person}
        name={props.todo.name}
        onChange={() => {
          dispatch({
            type: "ASSIGN",
            payload: { taskName: props.todo.name, who: person },
          });
        }}
        disabled={props.todo.completed}
      ></input>
    </td>
  ));
  //TODO: vyresit jinak
  useEffect(() => {
    if (props.todo.who === "Máma") {
      setBackground({ backgroundColor: "pink" });
    } else if (props.todo.who === "Táta") {
      setBackground({ backgroundColor: "lightblue" });
    } else if (props.todo.who === "Kuba") {
      setBackground({ backgroundColor: "lightgreen" });
    } else if (props.todo.who === "Matěj") {
      setBackground({ backgroundColor: "burlywood" });
    } else {
      setBackground({ backgroundColor: "white" });
    }
  }, [props.todo.who]);

  return (
    <tr style={background} data-testid="formcell">
      <td
        className="cancel"
        style={completedBackground}
        onClick={() => {
          dispatch({ type: "DELETE", payload: props.todo.name });
        }}
        data-testid="delete"
      >
        x
      </td>
      <td className="todoName" style={completedBackground}>
        {props.todo.name}
      </td>
      <td className="todoTime" style={completedBackground}>
        {props.todo.time} min
      </td>
      {inputList}
      <td className="todoFinished" style={completedBackground}>
        {props.todo.completed ? "ano" : "ne"}
      </td>
    </tr>
  );
}

export default FormCell;
