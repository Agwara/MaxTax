import React, {useState, useEffect, useReducer} from "react";

import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import VehicleDataItem from "./VehicleDataItem"
import FetchError from "../FetchError/FetchError";
import ControlHeader from "../ControlHeader/ControlHeader";
import { startFetchData } from "../../fetchData/fetchData";
import {calculatePageNumber} from "../../helperFunctions/calculatePageNumber"
import fetchReducer from "../../fetchReducer/fetchReducer";

import "./DashBoardVehicle.css";

const initialState = {
  fetchData: [],
  filteredItems: [],
  totalItems: 0,
  nextFetchUrl: "https://swapi.dev/api/vehicles/",
  prevFetchUrl: null,
  fetchError: false,
  isLoading: true 
}

const DashBoardVehicle = () => {
  const [dashboardVehicleState, dispatch] = useReducer(fetchReducer, initialState);
  const [stateUrl, setStateUrl] = useState("https://swapi.dev/api/vehicles/");
  const [paginationData, setPaginationData] = useState([0, 0, 0]);

  useEffect(() => {
    let isMounted = true;
    startFetchData(stateUrl).then((response) => {
      let paginationObject = calculatePageNumber(response.previous, response.next, response.results.length, response.count);
      if (isMounted) {
        setPaginationData(paginationObject);
        dispatch({
          type: "INITIALIZE_STATE",
          payLoad: response
        })
      }
    }).catch(e => {
      if (isMounted) {
        dispatch({type: "SHOW_ERROR"})
      }
    })

    return () => {
      isMounted = false
    }
  }, [stateUrl])

  const getFilterText = (filterText) => {
    dispatch({
      type: "FILTER_ITEMS",
      filterText: filterText
    })
  }

  const startLoadingData = () => {
    dispatch({type: "START_FETCH"})
  }

  return (
    <div className="dashboard__pages">
    <ControlHeader
      placeHolder="vehicles"
      getFilterText={getFilterText}
      setStateUrl={setStateUrl}
      paginationData={paginationData}
      componentState={dashboardVehicleState}
      startLoadingData={startLoadingData}

    />

    <div className="dashboard-vehicle__container">
      <div className="dashboard-vehicle__header">
        <p>Vehicle Name</p>
        <p>Vehicle Model</p>
        <p>Vehicle Class</p>
        <p>Vehicle Manufacturer</p>
        <p>Vehicle Length</p>
        <p>Crew</p>
        <p>Passengers</p>
        <p>Cargo Capacity</p>
      </div>

      {dashboardVehicleState.isLoading && <LoadingAnimation />}
      {dashboardVehicleState.fetchError && <FetchError />}

      <div className="vehicle-items hide-scroll-bar">
        {dashboardVehicleState.filteredItems.map((item) => <VehicleDataItem key={item.name} item={item} />)}
      </div>
    </div>
  </div>
  )
}

export default DashBoardVehicle;