import React, { useState } from "react";

function Person(props) {
  let activities;
  let time = 0;
  let tydenTime = 0;
  let pololetiTime = 0;
  let activityList;
  let color = {};
  let background = {};
  const [necoSeUdelalo, setNecoSeUdelalo] = useState(false);

  if (props.name === "Máma") {
    color = { color: "hotpink" };
    background = { backgroundColor: "pink" };
  } else if (props.name === "Táta") {
    color = { color: "blue" };
    background = { backgroundColor: "lightblue" };
  } else if (props.name === "Kuba") {
    color = { color: "green" };
    background = { backgroundColor: "lightgreen" };
  } else {
    color = { color: "chocolate" };
    background = { backgroundColor: "burlywood" };
  }

  if (props.todos) {
    activities = Object.entries(props.todos).filter((todo) => {
     
      return (
        !todo[1].completed &&
        ((todo[1].tyden && props.zobrazTyden) ||
          (!todo[1].tyden && !props.zobrazTyden))
      );
    });

    time = activities.reduce((total, current) => total + current[1].time, 0);
    tydenTime = activities
      .filter(
        (activity) => activity[1].tyden && !activity[1].prepsanaDoTydennich
      )
      .reduce((total, current) => total + current[1].time, 0);

    pololetiTime = activities
      .filter(
        (activity) => activity[1].tyden && activity[1].prepsanaDoTydennich
      )
      .reduce((total, current) => total + current[1].time, 0);

    activityList = activities.map((todo) => (
      <tr key={todo[0]}>
        <td>{todo[1].name}</td>
        <td>{todo[1].time} min</td>

        {props.zobrazTyden ? (
          <td>
            <input
              type="checkbox"
              onChange={() => completeTask(todo)}
            ></input>
          </td>
        ) : (
          <td>
            <input
              type="checkbox"
              onChange={() => {props.prepisDoTydennich(todo[1]);todo[1].tyden=true}}
            ></input>
          </td>
        )}
      </tr>
    ));
  }

  function countHours(minutes, statementTotal, statementRest, everythingDone) {
    if (minutes) {
      if (Math.floor(minutes / 60) === 0 && !necoSeUdelalo) {
        return statementTotal + (minutes % 60) + " min";
      } else if (Math.floor(minutes / 60) === 0 && necoSeUdelalo) {
        return statementRest + (minutes % 60) + " min";
      } else if (Math.floor(minutes / 60) > 0 && !necoSeUdelalo) {
        return (
          statementTotal +
          Math.floor(minutes / 60) +
          " h " +
          (minutes % 60) +
          " min"
        );
      } else if (Math.floor(minutes / 60) > 0 && necoSeUdelalo) {
        return (
          statementRest +
          Math.floor(minutes / 60) +
          " h " +
          (minutes % 60) +
          " min"
        );
      }
    } else {
      if (necoSeUdelalo && props.zobrazTyden) {
        return everythingDone;
      }
      else {
        return null;
      }
    }
  }

  function completeTask(todo) {
    setNecoSeUdelalo(true);
    todo[1].completed = true;
    props.completed(todo[0]);
  }

  return (
    <div className="person">
      <h3 style={color}>{props.name}</h3>
      <h3 className="celkovyCas">
        {countHours(
          time,
          "Celková doba tvého úklidu: ",
          "Celkem ti zbývá: ",
          "Vše je hotovo, dobrá práce!!!"
        )}
      </h3>

      {props.zobrazTyden ? (
        <div>
          <h4 className="dilciCas">
            {countHours(
              tydenTime,
              "Týdenní úklid: ",
              "Z týdenního úklidu zbývá: ",
              "Týdenní úklid je hotový."
            )}
          </h4>
          <h4 className="dilciCas">
            {countHours(
              pololetiTime,
              "Jarní úklid: ",
              "Z jarního úklidu dnes zbývá: ",
              "Jarní úklid je dnes hotový."
            )}
          </h4>
        </div>
      ) : null}
      <table>
        <thead>
          <tr style={background}>
            <th>Činnost</th>
            <th>Čas</th>
            {props.zobrazTyden ? <th>Splněno</th> : <th>Udělat dnes?</th>}
          </tr>
        </thead>
        <tbody>{activityList}</tbody>
      </table>
    </div>
  );
}

export default Person;
