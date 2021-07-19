import React from "react";

import DashBoardCard from "../../components/DashBoardCard/DashBoardCard";
import FetchFilmsData from "../../components/FecthFilmsData/FetchFilmsData";
import "./DashBoardMain.css";

import filmsIcon from "../../assets/video-camera (1).svg";
import starShipsIcon from "../../assets/ufo.svg";
import peopleIcon from "../../assets/group-of-students.svg";
import taxiIcon from "../../assets/taxi.svg";
import speciesIcon from "../../assets/phylogenetics.svg"

const DashBoardMain = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-main__control-block">
        <div className="dashboard-main__control-block--inner">
          <div className="dashboard-main__control-block--items">
            <p>Current Year</p>
            <p>&#x25BC;</p>
          </div>
          <div className="dashboard-main__control-block--items">
            <p>Current Week</p>
            <p>&#x25BC;</p>
          </div>
        </div>  
      </div>
      
      <div className="dashboard-main__content">
        <div className="dashboard-main__cards">
          <DashBoardCard 
            title="Films"
            icon={filmsIcon}
            backGrndColor="#C9F2EC"
          />
          <DashBoardCard 
            title="Starships"
            icon={starShipsIcon}
            backGrndColor="#D3E2FF"
          />
          <DashBoardCard 
            title="People"
            icon={peopleIcon}
            backGrndColor="#E0DEF6"
          />
          <DashBoardCard 
            title="Vehicles"
            icon={taxiIcon}
            backGrndColor="#FCF7D8"
          />
          <DashBoardCard 
            title="Species"
            icon={speciesIcon}
            backGrndColor="#E0DEF6"
          />
        </div>
        
        <FetchFilmsData />
      </div>
    </div>
  )
}

export default DashBoardMain;