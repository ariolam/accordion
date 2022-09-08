import React, { useState } from "react";

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
            {" "}
            Press here{" "}
          </button>
          {showAnswer && <p> {question.info}</p>}
        </div>
      </div>
    </div>
  );
}

export default Questions;
