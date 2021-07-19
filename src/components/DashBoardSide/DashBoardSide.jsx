import React from "react";
import {useHistory, useParams} from "react-router-dom"
import "./DashBoardSide.css";

import starwarslogo from "../../assets/Star wars logo.png"
import dashboard from "../../assets/dashboard.svg";
import dashboardActive from "../../assets/dashboardActive.svg";

import building from "../../assets/building.svg";
import buildingStyled from "../../assets/buildingStyled.svg";

import shoppingBasket from "../../assets/shopping-basket.svg";
import shoppingBasketStyled from "../../assets/shopping-basketStyled.svg"

import menu from "../../assets/menu.svg";
import menuStyled from "../../assets/menuStyled.svg";

const DashBoardSide = () => {
  const history = useHistory()
  const {id} = useParams()


  return (
    <div className="dashboard-side">
      <figure className="dashboard-side__icon" onClick={() => history.push("/dashboard/main")}>
        <img 
          alt="Logo"
          src={starwarslogo}
        />
      </figure>

      <ul className="dashboard-side__nav">
        <li 
          onClick={() => history.push("/dashboard/main")} 
          className={id === "main" ? "nav-active" : ""}
        >
          <img 
            alt=""
            src={id === "main" ? dashboardActive : dashboard}
          />
          <p className={id === "main" ? "active-text" : "normal-text"}>Dashboard</p>
        </li>

        <li 
          onClick={() => history.push("/dashboard/starships")}
          className={id === "starships" ? "nav-active" : ""}
        >
          <img 
            alt=""
            src={id === "starships" ? buildingStyled : building}
          />
          <p className={id === "starships" ? "active-text" : "normal-text"}>StarShips</p>
        </li>

        <li 
          onClick={() => history.push("/dashboard/people")} 
          className={id === "people" ? "nav-active" : ""}
        >
          <img 
            alt=""
            src={id === "people" ? shoppingBasketStyled : shoppingBasket}
          />
          <p className={id === "people" ? "active-text" : "normal-text"}>People</p>
        </li>

        <li 
          onClick={() => history.push("/dashboard/vehicles")}
          className={id === "vehicles" ? "nav-active" : ""}
        >
          <div className={id === "vehicles" ? "active-dummy" : "plain-dummy"}></div>
          <p className={id === "vehicles" ? "active-text" : "normal-text"}>Vehicles</p>
        </li>

        <li 
          onClick={() => history.push("/dashboard/species")}
          className={id === "species" ? "nav-active" : ""}
        >
          <img 
            alt=""
            src={id === "species" ? menuStyled : menu}
          />
          <p className={id === "species" ? "active-text" : "normal-text"}>Species</p>
        </li>
      </ul>
    </div>
  )
}

export default DashBoardSide;
