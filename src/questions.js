import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import "./questions.css";

function Questions({ question }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question-container shadow p-2 mb-3 bg-body rounded">
      <h6> {question.title}</h6>
      <button
        type="button"
        class="btn btn-light rounded-circle float-end"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
      </button>
      {showAnswer && <p> {question.info}</p>}
    </div>
  );
}

export default Questions;
