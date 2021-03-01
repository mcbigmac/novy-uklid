import React, { useState } from "react";
import KdoKolik from "./KdoKolik";
import OsobaCas from "./OsobaCas";

function Summary(props) {
  let countTime = props.countTime;

  function countHours(minutes) {
    return Math.floor(minutes / 60) + " h " + (minutes % 60) + " min";
  }

  const [percentTime, setPercentTime] = useState({
    mama: { name: "Máma", percent: 25, time: (countTime / 100) * 25 },
    tata: { name: "Táta", percent: 25, time: (countTime / 100) * 25 },
    kuba: { name: "Kuba", percent: 25, time: (countTime / 100) * 25 },
    matej: { name: "Matěj", percent: 25, time: (countTime / 100) * 25 },
  });

  let sumPercent =
    percentTime.mama.percent +
    percentTime.tata.percent +
    percentTime.kuba.percent +
    percentTime.matej.percent;

  function ukazOznameni(sumPercent) {
    if (sumPercent < 100) {
      return <p className="oznameni">Celkový čas nedosahuje 100%.</p>;
    } else if (sumPercent > 100) {
      return <p className="oznameni">Celkový čas přesahuje 100%.</p>;
    }
  }

  let timeTable = Object.entries(percentTime).map((person) => (
    <KdoKolik
      key={person[1].name}
      person={person[1]}
      changeTimePerson={(e) => {
        changeTimePerson(person[1], e);
      }}
    />
  ));

  let minTable = Object.entries(percentTime).map((person) => (
    <OsobaCas key={person[1].name} person={person[1]} countTime={countTime} />
  ));

  function changeTimePerson(person, e) {
    for (let property in percentTime) {
      if (percentTime[property].name === person.name) {
        setPercentTime({
          ...percentTime,
          [property]: {
            ...percentTime[property],
            percent: Number(e.target.value),
            time: (countTime / 100) * Number(e.target.value),
          },
        });
      }
    }
  }

  return (
    <div>
      <h3>
        {" "}
        Čas {props.zobrazTyden ? "týdenního" : "jarního"} úklidu celkem:{" "}
        {countHours(countTime)}{" "}
      </h3>
      <h3>Jakou část kdo udělá:</h3>
      <table className="kdoKolik">
        <tbody>{timeTable}</tbody>
      </table>
      <div>{ukazOznameni(sumPercent)}</div>

      <div>
        <h3>Čas na osobu:</h3>
        <table className="kdoKolik">
          <tbody>{minTable}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Summary;
