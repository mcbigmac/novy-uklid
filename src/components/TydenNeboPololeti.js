import Form from "./Form";
import Summary from "./Summary";
import Individuals from "./Individuals";
import { useState, useEffect } from "react";
import cinnostiTyden from "./../cinnostiTyden";
import cinnostiPololeti from "./../cinnostiPololeti";
var object = require("lodash/fp/object");

function TydenNeboPololeti(props) {
  const [todos, setTodos] = useState(cinnostiTyden);
  const [todosPeople, setTodosPeople] = useState({});

  let timeCount = (todos) =>
    todos.reduce((total, current) => total + current.time, 0);

  const [countTime, setCountTime] = useState(timeCount(todos));

  useEffect(() => {
    let zobrazene = props.cinnosti.filter((cinnost) => !cinnost.deleted);
    setTodos(zobrazene);
    setCountTime(timeCount(zobrazene));
    setTodosPeople(object.merge(todosPeople, props.predemVybrane));
  }, [props.cinnosti, props.predemVybrane]);

  function deleteTodo(name) {
    for (let todo of todos) {
      if (todo.name === name) {
        todo.deleted = true;
      }
    }
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.deleted));
    setCountTime(timeCount(todos.filter((todo) => !todo.deleted)));
  }

  function completeTask(todo) {
    let newTodos = [];
    let foundIt = false;

    for (let item of todos) {
      if (item.name === todo) {
        item.completed = true;
        foundIt = true;
        newTodos.push(item);
      } else {
        newTodos.push(item);
      }
    }
    setTodos(newTodos);

    if (!foundIt) {
      for (let item of cinnostiPololeti) {
        if (item.name === todo) {
          item.completed = true;
        }
      }
    }
  }

  function radioClick(todo, value) {
    let newTodos = [];
    for (let task of todos) {
      if (task.name === todo.name) {
        task.who = value;
        newTodos.push(task);
      } else {
        newTodos.push(task);
      }
    }

    setTodos(newTodos);

    setTodosPeople({
      ...todosPeople,
      [value]: { ...todosPeople[value], [todo.name]: todo },
    });

    if (Object.keys(todosPeople).length !== 0) {
      for (let property in todosPeople) {
        delete todosPeople[property][todo.name];
      }
    }
  }

  function prepisDoTydennich(todo) {
    let newTodos = [];
    for (let task of todos) {
      if (task.name === todo.name) {
        task.tyden = true;
        task.prepsanaDoTydennich = true;
        newTodos.push(task);
      } else {
        newTodos.push(task);
      }
    }
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="main">
        <Form todos={todos} deleteTodo={deleteTodo} radioClick={radioClick} />
        <Summary
          todos={todos}
          countTime={countTime}
          zobrazTyden={props.zobrazTyden}
        />
        <Individuals
          todos={todosPeople}
          completed={completeTask}
          zobrazTyden={props.zobrazTyden}
          prepisDoTydennich={prepisDoTydennich}
        />
      </div>
    </div>
  );
}

export default TydenNeboPololeti;
