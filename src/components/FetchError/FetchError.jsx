import React from "react";

import "./FetchError.css";

const FetchError = () => {
  return (
    <div className="fetch-error">
      <h3>Error</h3>
      <p>There was an error in retrieving the data</p>
    </div>
  )
}

export default FetchError;