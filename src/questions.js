import React from "react";

function questions({ question }) {
  return (
    <div className="question-container">
      <div className="row">
        <div className="col-9">
          <h6> {question.title}</h6>
        </div>
        <div className="col-3">
          <button> Press here </button>
        </div>
      </div>
    </div>
  );
}

export default questions;
