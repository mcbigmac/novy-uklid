import React from "react";
import { countHours } from "../utils";

function OsobaCas(props) {
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
