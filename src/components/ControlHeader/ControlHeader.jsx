import React from "react";
import {useHistory} from "react-router-dom"; 

import arrowRight from "../../assets/arrow-point-to-right.svg"
import "./ControlHeader.css";


const ControlHeader = (props) => {
  const history = useHistory();
  console.log(history)
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

        <p>{props.totalItem} Total</p>

        <div>
          <p>Showing {props.paginationData[0]} - {props.paginationData[1]} of {props.paginationData[2]}</p>
        </div>
        
      </div>
      <div className="control-header__search">
        <input
          type="text"
          placeholder={`Search for ${props.placeHolder}`}  
          className="control__input"
        />
      </div>
    </div>
  )
}

export default ControlHeader;
