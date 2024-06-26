import React from "react";
import _ from "lodash";
import Summary from "../quizs/Summary";
import Analysis from "../quizs/Analysis";
import "../../styles/Result-style.css";
import useAnswers from "../../hooks/useAnswers";
import { useLocation, useParams } from "react-router-dom";

const Result = () => {
  const { id } = useParams();
  const location = useLocation();
  const { state: qna } = location;

  const { loading, error, answers } = useAnswers(id);

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = calculate();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
};

export default Result;
