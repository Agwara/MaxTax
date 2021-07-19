import React, {useState, useEffect, useReducer} from "react";

import ShipsDataItem from "./ShipsDataItem"
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import FetchError from "../FetchError/FetchError";
import ControlHeader from "../ControlHeader/ControlHeader";
import { startFetchData } from "../../fetchData/fetchData";
import fetchReducer from "../../fetchReducer/fetchReducer";
import {calculatePageNumber} from "../../helperFunctions/calculatePageNumber"
import "./DashBoardShips.css";

const initialState = {
  fetchData: [],
  filteredItems: [],
  totalItems: 0,
  nextFetchUrl: "https://swapi.dev/api/starships/",
  prevFetchUrl: null,
  fetchError: false,
  isLoading: true 
}

const DashBoardShips = () => {
  const [dashboardShipState, dispatch] = useReducer(fetchReducer, initialState);
  const [stateUrl, setStateUrl] = useState("https://swapi.dev/api/starships/");
  const [paginationData, setPaginationData] = useState([0, 0, 0]) 

  useEffect(() => {
    shipsFetch(stateUrl)
  }, [stateUrl])


  const shipsFetch = async (url) => {
    try {
      dispatch({type: "START_FETCH"})
      let response = await startFetchData(url);
      console.log(response)
      let paginationObject = calculatePageNumber(response.previous, response.next, response.results.length, response.count);
      console.log(paginationObject)
      setPaginationData(paginationObject);
      // console.log(paginationObject)

      dispatch({
        type: "INITIALIZE_STATE",
        payLoad: response
      }) 
    } catch (e) {
      dispatch({type: "SHOW_ERROR"})
    }
  }

  const getFilterText = (filterText) => {
    dispatch({
      type: "FILTER_ITEMS",
      filterText: filterText
    })
  }

  return (
    <div className="dashboard-ship">
      <ControlHeader
        placeHolder="starship"
        getFilterText={getFilterText}
        setStateUrl={setStateUrl}
        paginationData={paginationData}
        componentState={dashboardShipState}

      />

      <div className="dashboard-data">
        <div className="dashboard-data__header">
          <p>Name</p>
          <p>Model</p>
          <p>Class</p>
          <p>Cost(in GC)</p>
          <p>Passengers</p>
          <p>Length</p>
          <p>Crew</p>
        </div>

        {dashboardShipState.isLoading && <LoadingAnimation />}
        {dashboardShipState.fetchError && <FetchError />}
        {
          dashboardShipState.filteredItems && 
          dashboardShipState.filteredItems.map((item) => <ShipsDataItem key={item.name} item={item} />) 
        }
      </div>
    </div>
  )
}

export default DashBoardShips;