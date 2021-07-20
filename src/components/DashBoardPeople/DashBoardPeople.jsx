import React, {useState, useEffect, useReducer} from "react";

import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import PeopleDataItem from "./PeopleDataItem"
import FetchError from "../FetchError/FetchError";
import ControlHeader from "../ControlHeader/ControlHeader";
import { startFetchData } from "../../fetchData/fetchData";
import {calculatePageNumber} from "../../helperFunctions/calculatePageNumber"
import fetchReducer from "../../fetchReducer/fetchReducer";
import "./DashBoardPeople.css";

const initialState = {
  fetchData: [],
  filteredItems: [],
  totalItems: 0,
  nextFetchUrl: "https://swapi.dev/api/people/",
  prevFetchUrl: null,
  fetchError: false,
  isLoading: true 
}


const DashBoardPeople = () => {
  const [dashboardPeopleState, dispatch] = useReducer(fetchReducer, initialState);
  const [stateUrl, setStateUrl] = useState("https://swapi.dev/api/people/");
  const [paginationData, setPaginationData] = useState([0, 0, 0]) 


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
        placeHolder="people"
        getFilterText={getFilterText}
        setStateUrl={setStateUrl}
        paginationData={paginationData}
        componentState={dashboardPeopleState}
        startLoadingData={startLoadingData}

      />

      <div className="dashboard-people__container">
        <div className="dashboard-people__header">
          <p>Name</p>
          <p>Birth Year</p>
          <p>Gender</p>
          <p>Eye Color</p>
          <p>Hair Color</p>
          <p>Height</p>
          <p>Mass</p>
          <p>Skin Color</p>
          <p>Created</p>
        </div>

        {dashboardPeopleState.isLoading && <LoadingAnimation />}
        {dashboardPeopleState.fetchError && <FetchError />}

        <div className="people-items hide-scroll-bar">
          {dashboardPeopleState.filteredItems.map((item) => <PeopleDataItem key={item.name} item={item} />)}
        </div>
      </div>
    </div>
  )
}

export default DashBoardPeople;