import React from "react";
import {useHistory} from "react-router-dom"; 

import arrowRight from "../../assets/arrow-point-to-right.svg";
import searchIcon from "../../assets/search.svg"
import "./ControlHeader.css";


const ControlHeader = (props) => {
  const history = useHistory();

  const nextController = (value) => {
    if (value) {
      props.setStateUrl(value);
      props.startLoadingData();
    }
  }

  const prevController = (value) => {
    if (value) {
      props.setStateUrl(value)
      props.startLoadingData();
    }
  } 

  return (
    <div className="control-header">
      <div className="control-header__actions">
        <div className="header__back-action" onClick={() => history.goBack()}>
          <img
            alt=""
            src={arrowRight}
          />
          <p>Back</p>
        </div>

        <p>{props.componentState.totalItems} Total</p>
      
        <p>Showing {props.paginationData[0]} - {props.paginationData[1]} of {props.paginationData[2]}</p>

        <div className="arrow-actions">
          <img
            alt=""
            src={arrowRight}
            onClick={() => prevController(props.componentState.prevFetchUrl)}
          />
          <img
            alt=""
            src={arrowRight}
            className="rotate-arrow"
            onClick={() => nextController(props.componentState.nextFetchUrl)}
          />
        </div>
      </div>
      
      <div className="control-header__search">
        <input
          type="text"
          placeholder={`Search for ${props.placeHolder}`}  
          className="control__input"
          onChange={(e) => props.getFilterText(e.target.value)}
        />

        <img
          alt=""
          src={searchIcon}
          className="search__position"
        />
      </div>
    </div>
  )
}

export default ControlHeader;
