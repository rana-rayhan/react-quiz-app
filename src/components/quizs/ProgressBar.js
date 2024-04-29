import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import Button from "../Button";

const ProgressBar = ({ prev, next, progress, submit }) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  const toggleTooltip = () => {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  };

  return (
    <div className="progressBar">
      <div className="backButton">
        <span onClick={prev} className="material-icons-outlined">
          arrow_back
        </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip" ref={tooltipRef}>
          {progress}% Complete!
        </div>
        <div className="rangeBody">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>
      <Button
        onClick={progress === 100 ? submit : next}
        className="button next"
      >
        <span>{progress === 100 ? "Submit Now" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;
