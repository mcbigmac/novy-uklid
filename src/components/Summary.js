import React, { useState } from "react";
import { useSelector } from "react-redux";
import KdoKolik from "./KdoKolik";
import OsobaCas from "./OsobaCas";
import styled from "styled-components";
import { countHours, timeCount } from "../utils";

const MalyNadpis = styled.h3`
  text-decoration: underline;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${(props) => props.theme.color};
`;

function Summary() {
  const week = useSelector((state) => state.meta.week);
  const todos = useSelector((state) => (week ? state.week : state.season));

  const [percentTime, setPercentTime] = useState([
    { name: "Máma", percent: 25, time: (timeCount(todos) / 100) * 25 },
    { name: "Táta", percent: 25, time: (timeCount(todos) / 100) * 25 },
    { name: "Kuba", percent: 25, time: (timeCount(todos) / 100) * 25 },
    { name: "Matěj", percent: 25, time: (timeCount(todos) / 100) * 25 },
  ]);

  let sumPercent = percentTime.reduce(
    (total, current) => total + current.percent,
    0
  );

  function ukazOznameni(sumPercent) {
    return sumPercent < 100 ? (
      <p className="oznameni">Celkový čas nedosahuje 100%.</p>
    ) : sumPercent > 100 ? (
      <p className="oznameni">Celkový čas přesahuje 100%.</p>
    ) : null;
  }

  let timeTable = percentTime.map((person) => (
    <KdoKolik
      key={person.name}
      person={person}
      changeTimePerson={(e) => {
        changeTimePerson(person, e);
      }}
    />
  ));

  let minTable = percentTime.map((person) => (
    <OsobaCas key={person.name} person={person} countTime={timeCount(todos)} />
  ));

  function changeTimePerson(person, e) {
    let newPercentTime = [...percentTime];
    for (let item of newPercentTime) {
      if (item.name === person.name) {
        item.percent = Number(e.target.value);
        item.time = (timeCount(todos) / 100) * Number(e.target.value);
      }
    }
    setPercentTime(newPercentTime);
  }

  return (
    <div>
      <MalyNadpis>
        Čas {week ? "týdenního" : "jarního"} úklidu celkem:{" "}
        {countHours(timeCount(todos))}
      </MalyNadpis>
      <MalyNadpis>Jakou část kdo udělá:</MalyNadpis>
      <table className="kdoKolik">
        <tbody>{timeTable}</tbody>
      </table>
      <div>{ukazOznameni(sumPercent)}</div>

      <div>
        <MalyNadpis>Čas na osobu:</MalyNadpis>
        <table className="kdoKolik">
          <tbody>{minTable}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Summary;
