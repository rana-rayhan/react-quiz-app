import React from "react";
import img3 from "../../assets/images/3.jpg";

const MiniPlayer = () => {
  return (
    <div className="miniPlayer floatingBtn">
      <span className="material-icons-outlined open"> play_circle_filled </span>
      <span className="material-icons-outlined close"> close </span>
      <img src={img3} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
