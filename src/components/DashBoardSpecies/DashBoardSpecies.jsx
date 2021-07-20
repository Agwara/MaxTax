import React, {useState, useEffect, useReducer} from "react";

import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import SpeciesDataItem from "./SpeciesDataItem";
import FetchError from "../FetchError/FetchError";
import ControlHeader from "../ControlHeader/ControlHeader";
import { startFetchData } from "../../fetchData/fetchData";
import {calculatePageNumber} from "../../helperFunctions/calculatePageNumber"
import fetchReducer from "../../fetchReducer/fetchReducer";

import "./DashBoardSpecies.css";

const initialState = {
  fetchData: [],
  filteredItems: [],
  totalItems: 0,
  nextFetchUrl: "https://swapi.dev/api/species/",
  prevFetchUrl: null,
  fetchError: false,
  isLoading: true 
}

const DashBoardVehicle = () => {
  const [dashboardSpeciesState, dispatch] = useReducer(fetchReducer, initialState);
  const [stateUrl, setStateUrl] = useState("https://swapi.dev/api/species/");
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
      placeHolder="species"
      getFilterText={getFilterText}
      setStateUrl={setStateUrl}
      paginationData={paginationData}
      componentState={dashboardSpeciesState}
      startLoadingData={startLoadingData}

    />

    <div className="dashboard-species__container">
      <div className="dashboard-species__header">
        <p>Name</p>
        <p>Classification</p>
        <p>Designation</p>
        <p>Average Height</p>
        <p>Average Lifespan</p>
        <p>Eye colors</p>
        <p>Hair colors</p>
        <p>Language</p>
      </div>

      {dashboardSpeciesState.isLoading && <LoadingAnimation />}
      {dashboardSpeciesState.fetchError && <FetchError />}

      <div className="species-items hide-scroll-bar">
        {dashboardSpeciesState.filteredItems.map((item) => <SpeciesDataItem key={item.name} item={item} />)}
      </div>
    </div>
  </div>
  )
}

export default DashBoardVehicle;