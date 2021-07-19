import React, {useState, useEffect, useReducer} from "react";

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
  const [filterText, setFilterText] = useState("");
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

  const getFilterText = () => {
    dispatch({
      type: "FILTER_ITEMS",
      filterText: filterText
    })
  }
  console.log("here")
  console.log(paginationData)

  return (
    <div className="dashboard-ship">
      <ControlHeader
        placeHolder="starship"
        setFilterText={setFilterText}
        totalItem={dashboardShipState.totalItems}
        getFilterText={getFilterText}
        setStateUrl={setStateUrl}
        paginationData={paginationData}
        nextUrl={dashboardShipState.nextFetchUrl}
        prevUrl={dashboardShipState.prevFetchUrl}

      />
    </div>
  )
}

export default DashBoardShips;