import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import "./questions.css";

function Questions({ question }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question-container">
      <div className="row">
        <div className="col">
          <h6> {question.title}</h6>
        </div>
        <div className="col">
          <button onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </button>
          {showAnswer && <p> {question.info}</p>}
        </div>
      </div>
    </div>
  );
}

export default Questions;
