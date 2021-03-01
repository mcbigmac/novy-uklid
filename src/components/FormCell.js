import React, { useState, useEffect } from "react";

function FormCell(props) {
  const [background, setBackground] = useState({ backgroundColor: "white" });
  useEffect(() => {
    if (props.todo.who === "mama") {
      setBackground({ backgroundColor: "pink" });
    } else if (props.todo.who === "tata") {
      setBackground({ backgroundColor: "lightblue" });
    } else if (props.todo.who === "kuba") {
      setBackground({ backgroundColor: "lightgreen" });
    } else if (props.todo.who === "matej") {
      setBackground({ backgroundColor: "burlywood" });
    } else {
      setBackground({ backgroundColor: "white" });
    }
  }, [props.todo.who]);

  let completedBackground = { backgroundColor: "rgba(255,255,255,0)" };
  if (props.todo.completed) {
    completedBackground = { backgroundColor: "rgba(255,255,255,0.7)" };
  }

  function choosePerson(e) {
    props.radioClick(e);
  }

  return (
    <tr style={background}>
      <td
        className="cancel"
        style={completedBackground}
        onClick={props.deleteTodo}
      >
        x
      </td>
      <td className="todoName" style={completedBackground}>
        {props.todo.name}
      </td>
      <td className="todoTime" style={completedBackground}>
        {props.todo.time} min
      </td>
      <td className="radioContainer" style={completedBackground}>
        <input
          type="radio"
          name={props.todo.name}
          value="mama"
          onChange={(e) => choosePerson(e)}
          disabled={props.todo.completed}
        ></input>
      </td>
      <td className="radioContainer" style={completedBackground}>
        <input
          type="radio"
          name={props.todo.name}
          value="tata"
          onChange={(e) => choosePerson(e)}
          disabled={props.todo.completed}
        ></input>
      </td>
      <td className="radioContainer" style={completedBackground}>
        <input
          type="radio"
          name={props.todo.name}
          value="kuba"
          onChange={(e) => choosePerson(e)}
          disabled={props.todo.completed}
        ></input>
      </td>
      <td className="radioContainer" style={completedBackground}>
        <input
          type="radio"
          name={props.todo.name}
          value="matej"
          onChange={(e) => choosePerson(e)}
          disabled={props.todo.completed}
        ></input>
      </td>
      <td className="todoFinished" style={completedBackground}>
        {props.todo.completed ? "ano" : "ne"}
      </td>
    </tr>
  );
}

export default FormCell;
