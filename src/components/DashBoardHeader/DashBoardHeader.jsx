import React from "react";
import {useParams} from "react-router-dom";

import "./DashBoardHeader.css";

import bellIcon from "../../assets/clarity_bell-line.svg";
import messageIcon from "../../assets/majesticons_messages-line.svg";
import initialIcon from "../../assets/images.png"

const DashBoardHeader = () => {
  const { id } = useParams();

  let getTitle = () => {
    return (id === "main") ? "dashboard": id
  }

  return (
    <header className="dashboard__header">
    <p>{getTitle()}</p>

      <div className="dashboard__main--header-icons">
        <img
          alt=""
          src={messageIcon}
          height="30"
          width="30"
        />
        <img
          alt=""
          src={bellIcon} 
          height="30"
          width="30"
        />

        <img
          alt=""
          src={initialIcon}
          height="60"
          width="60"
          className="initial-icon-style"
        />
      </div>
    </header>
  )
}

export default DashBoardHeader;