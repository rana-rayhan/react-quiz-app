import React from "react";
import Question from "./Question";

const Analysis = ({ answers }) => {
  return (
    <div class="analysis">
      <h1>Question Analysis</h1>

      <Question answers={answers} />
    </div>
  );
};

export default Analysis;
