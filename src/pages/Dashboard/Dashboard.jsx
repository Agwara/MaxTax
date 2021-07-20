import React from "react";
import {useParams} from "react-router-dom";
// import axios from "axios";
import DashBoardSide from "../../components/DashBoardSide/DashBoardSide";
import "./DashBoard.css";

import DashBoardMain from "../../components/DashBoardMain/DashBoardMain";
import DashBoardPeople from "../../components/DashBoardPeople/DashBoardPeople";
import DashBoardShips from "../../components/DashBoardShips/DashBoardShips";
import DashBoardSpecies from "../../components/DashBoardSpecies/DashBoardSpecies";
import DashBoardVehicle from "../../components/DashBoardVehicle/DashBoardVehicle";
import DashBoardHeader from "../../components/DashBoardHeader/DashBoardHeader";

const DashBoard = () => {
  const { id } = useParams();

  // useEffect(() => {
  //   axios.get("https://swapi.dev/api/people/")
  //     .then((res) => console.log(res.data))
  //     .catch(e => console.log(e))
  // })

  const renderMainContent = () => {
    switch (id) {
      case "main": 
        return <DashBoardMain />;
      
      case "starships":
        return <DashBoardShips />;
      
      case "people": 
        return <DashBoardPeople />;
      
      case "vehicles": 
        return <DashBoardVehicle />

      case "species":
        return <DashBoardSpecies />;

      default: 
        return <DashBoardMain />;  
    }
  }


  return (
    <div className="dashboard__container">
      <DashBoardSide />

      <DashBoardHeader />

      {renderMainContent()}

    </div>
  )
}

export default DashBoard;