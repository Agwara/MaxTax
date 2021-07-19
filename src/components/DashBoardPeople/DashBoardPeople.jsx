import React, {useState, useEffect, useReducer} from "react";

import ControlHeader from "../ControlHeader/ControlHeader";
import { startFetchData } from "../../fetchData/fetchData";
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
  const [filterText, setFilterText] = useState("");
  const [dashboardPeopleState, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    peopleFetch("https://swapi.dev/api/people/")
  },[])

  const peopleFetch = async (url) => {
    try {
      dispatch({type: "START_FETCH"})
      let response = await startFetchData(url)
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

  console.log(dashboardPeopleState)

  return (
    <div className="dashboard-people">
      <ControlHeader
        placeHolder="people"
        setFilterText={setFilterText}
        totalItem={dashboardPeopleState.totalItems}
        getFilterText={getFilterText}
      />
    </div>
  )
}

export default DashBoardPeople;