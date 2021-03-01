import React from "react";

function KdoKolik(props) {
 
  return (
    <tr>
     
      <td className="kdoJmeno">{props.person.name}</td>
      <td>
        <select value={props.person.percent} onChange={props.changeTimePerson}>
          <option value="0">0%</option>
          <option value="20">20%</option>
          <option value="25">25%</option>
          <option value="30">30%</option>
          <option value="40">40%</option>
          <option value="50">50%</option>
        </select>
      </td>
    </tr>
  );
}

export default KdoKolik;
