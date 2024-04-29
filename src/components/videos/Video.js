import React from "react";
import img3 from "../../assets/images/3.jpg";

const Video = ({ title, id, noq }) => {
  return (
    <div className="video">
      <img src={img3} alt={title} />
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Total points: {noq * 5}</p>
      </div>
    </div>
  );
};

export default Video;
