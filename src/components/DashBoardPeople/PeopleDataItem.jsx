import React from "react";

import "./DashBoardPeople.css";

const PeopleDataItem = (props) => {
  return (
    <div className="people-data-item">
      <p>{props.item.name}</p>
      <p>{props.item.birth_year}</p>
      <p>{props.item.gender}</p>
      <p>{props.item.eye_color}</p>
      <p>{props.item.hair_color}</p>
      <p>{props.item.height}</p>
      <p>{props.item.mass}</p>
      <p>{props.item.skin_color}</p>
      <p className="people-data-item--green">{props.item.created}</p>
    </div>
  )
}

export default PeopleDataItem;