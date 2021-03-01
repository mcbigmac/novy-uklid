import React from "react";
import FormCell from "./FormCell";

function Form(props) {
  
  let activityList = props.todos.map((todo) => (
    <FormCell
      key={todo.name}
      todo={todo}
      deleteTodo={(e) => props.deleteTodo(todo.name, e)}
      radioClick = {(e)=>props.radioClick(todo, e.target.value, e)}
      
    />
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="cancel" rowSpan="2"></th>
            <th className="todoName" rowSpan="2">
              Činnost
            </th>
            <th className="todoTime" rowSpan="2">
              Čas
            </th>
            <th className="todoWho" colSpan="4">Kdo to udělá</th>
            <th className="todoFinished" rowSpan="2">
              Splněno
            </th>
          </tr>
          <tr>
            <th className="radioContainer">Máma</th>
            <th className="radioContainer">Táta</th>
            <th className="radioContainer">Kuba</th>
            <th className="radioContainer">Matěj</th>
          </tr>
        </thead>
        <tbody>{activityList}</tbody>
      </table>
      <div id='tableBottom'>
        
      </div>
    </div>
  );
}

export default Form;
