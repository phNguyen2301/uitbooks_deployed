import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <div className="check-icon"></div>
      </label>
    </div>
  );
};

export default Loading;
