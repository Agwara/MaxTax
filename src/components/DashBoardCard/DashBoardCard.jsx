import React from "react";

import "./DashBoardCard.css"

const DashBoardCard = (props) => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__header">
        <p>{props.title}</p>
        <img
          alt=""
          src={props.icon}
          style={{backgroundColor: props.backGrndColor}}
        />
      </div>

      <div className="dashboard-card__footer">
        <p className="dashboard-card__number">200</p>
        <div className="dashboard-card__footer--inner">
          <p className="dashboard-card__footer--update">&uarr; 20</p>
          <p>More than yesterday</p>
        </div>
      </div>
    </div>
  )
}

export default DashBoardCard;