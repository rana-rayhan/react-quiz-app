import React from "react";
import Answers from "../quizs/Answers";
import ProgressBar from "../quizs/ProgressBar";
import MiniPlayer from "../quizs/MiniPlayer";
import "../../styles/Quiz-style.css";
const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
