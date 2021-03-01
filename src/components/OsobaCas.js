import React from "react";

function OsobaCas(props) {

  function countHours(minutes) {
    return Math.floor(minutes / 60) + " h " + (minutes % 60) + " min";
  }

  let countMins = Math.round((props.countTime / 100) * props.person.percent);
  let hours = countHours(countMins);

  return (
    <tr>
      <td>{props.person.name}:</td>
      <td>{hours}</td>
    </tr>
  );
}

export default OsobaCas;
