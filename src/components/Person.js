import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { timeCount, countHoursStatement } from "../utils";

function Person(props) {
  const [necoSeUdelalo, setNecoSeUdelalo] = useState(false);

  const seasonTodoToday = useSelector((state) =>
    state.season.filter((todo) => todo.tyden)
  );

  const week = useSelector((state) => state.meta.week);

  const cinnostiTyden = useSelector((state) => state.week);
  const cinnostiPololeti = useSelector((state) => state.season);

  const cinnosti = (week
    ? [...cinnostiTyden, ...seasonTodoToday]
    : cinnostiPololeti.filter((todo) => !todo.tyden)
  ).filter((todo) => todo.who === props.name && !todo.completed);

  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  function findTheme(name, themeObj) {
    for (let key in themeObj) {
      if (themeObj[key].name === name) {
        return themeObj[key];
      }
    }
  }

  const activityList = cinnosti.map((todo) => (
    <tr key={todo.name}>
      <td>{todo.name}</td>
      <td>{todo.time} min</td>
      {week ? (
        <td>
          <input
            checked={todo.completed}
            onChange={() => {
              dispatch({ type: "COMPLETE", payload: todo.name });
              setNecoSeUdelalo(true);
            }}
            type="checkbox"
          ></input>
        </td>
      ) : (
        <td>
          <input
            checked={todo.tyden}
            onChange={() => {
              dispatch({ type: "DO_TODAY", payload: todo.name });
            }}
            type="checkbox"
          ></input>
        </td>
      )}
    </tr>
  ));

  return (
    <div className="person">
      <h3 style={{ color: findTheme(props.name, theme).color }}>
        {props.name}
      </h3>
      <h3 className="celkovyCas">
        {countHoursStatement(
          timeCount(cinnosti),
          "Celková doba tvého úklidu: ",
          "Celkem ti zbývá: ",
          "Vše je hotovo, dobrá práce!!!",
          necoSeUdelalo,
          week
        )}
      </h3>

      {week ? (
        <div>
          <h4 className="dilciCas">
            {countHoursStatement(
              timeCount(cinnosti?.filter((todo) => !todo.doToday)),
              "Týdenní úklid: ",
              "Z týdenního úklidu zbývá: ",
              "Týdenní úklid je hotový.",
              necoSeUdelalo
            )}
          </h4>
          <h4 className="dilciCas">
            {countHoursStatement(
              timeCount(cinnosti?.filter((todo) => todo.doToday)),
              "Jarní úklid: ",
              "Z jarního úklidu dnes zbývá: ",
              "Jarní úklid je dnes hotový.",
              necoSeUdelalo
            )}
          </h4>
        </div>
      ) : null}
      <table>
        <thead>
          <tr style={{ background: findTheme(props.name, theme).background }}>
            <th>Činnost</th>
            <th>Čas</th>
            {week ? <th>Splněno</th> : <th>Udělat dnes?</th>}
          </tr>
        </thead>
        <tbody>{activityList}</tbody>
      </table>
    </div>
  );
}

export default Person;
