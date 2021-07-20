import React from "react";

import "./DashBoardVehicle.css";

const VehicleDataItem = (props) => {
  return (
    <div className="vehicle-data-item">
      <div className="vehicle-data__name">
        <div className="vehicle-data__block"></div>
        <p>{props.item.name.slice(0, 14)}...</p>
      </div>
      <p>{props.item.model.slice(0, 14)}...</p>
      <p>{props.item.vehicle_class.slice(0, 14)}...</p>
      <p>{props.item.manufacturer.slice(0, 14)}...</p>
      <p>{props.item.length}</p>
      <p>{props.item.crew}</p>
      <p>{props.item.passengers}</p>
      <p>{props.item.cargo_capacity}</p>
    </div>
  )
}

export default VehicleDataItem;