import React from "react";

import "./DashBoardShips.css";

const ShipsDataItem = (props) => {
  let costIncredit;
  if (isNaN(props.item.cost_in_credits)) {
    costIncredit = props.item.cost_in_credits
  } else {
    costIncredit = (parseInt(props.item.cost_in_credits)/10000) + " GC";
  }

  return (
    <div className="ships-data">
      <div className="ships-data__name">
        <div className="ships-data__block"></div>
        <p>{props.item.name.slice(0, 13)}...</p>
      </div>
      <p>{props.item.model.slice(0, 13)}...</p>
      <p>{props.item.starship_class}</p>
      
 
      <p className="dataItem-purple">{costIncredit}</p>
      <p>{props.item.passengers}</p>
      <p>{props.item.length}</p>
      <p>{props.item.crew}</p>
    </div>
  )
}

export default ShipsDataItem;