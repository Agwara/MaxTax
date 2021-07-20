import React from "react";

import "./DashBoardSpecies.css";

const VehicleDataItem = (props) => {
  return (
    <div className="species-data-item">
      <div className="species-data__name">
        <div className="species-data__block"></div>
        <p>{props.item.name}</p>
      </div>
      <p>{props.item.classification}</p>
      <p>{props.item.designation}</p>
      <p>{props.item.average_height}</p>
      <p>{props.item.average_lifespan}</p>
      <p>{props.item.eye_colors}</p>
      <p>{props.item.hair_colors}</p>
      <p>{props.item.language}</p>
    </div>
  )
}

export default VehicleDataItem;