import React from "react";
import Answers from "./Answers";

const Question = ({ answers = [] }) => {
  return answers.map((answer, index) => (
    <div class="question" key={index}>
      <div class="qtitle">
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
};

export default Question;
