import React, { useRef, useState } from "react";
import img3 from "../../assets/images/3.jpg";

const MiniPlayer = ({ title }) => {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);

  const toggleMiniPlayer = () => {
    if (!status) {
      buttonRef.current.classList.remove("floatingBtn");
      setStatus(true);
    } else {
      buttonRef.current.classList.add("floatingBtn");
      setStatus(false);
    }
  };
  return (
    <div
      className="miniPlayer floatingBtn"
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className="material-icons-outlined open"> play_circle_filled </span>
      <span
        className="material-icons-outlined close"
        onClick={toggleMiniPlayer}
      >
        close
      </span>
      <img src={img3} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;
