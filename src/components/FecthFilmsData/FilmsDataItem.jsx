import React from "react";

import "./FetchFilmsData.css";
import filmIcon from "../../assets/video-camera (1).svg";

const FilmsDataItem = (props) => {
  return (
    <div className="filmsdata-item">
      <div className="item-movie">
        <img alt="" src={filmIcon} height="40" width="40" />
        <p>{props.title}</p>
      </div>
      <p>{props.director}</p>
      <p>{props.producer.split(",")[0]}</p>
      <p>{props.releaseDate}</p>
      <p>{props.episodeID}</p>
      <p className="films-character">{props.charater}</p>
    </div>
  )
} 

export default FilmsDataItem;