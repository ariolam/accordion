import Questions from "./Questions";
import data from "./data";
import "./App.css";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState(data);

  // function showAnswer(id) {
  //   const item = data.filter((item) => item.id === id)[0];
  //   console.log(item.info);
  //   setQuestion();
  // }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-3">Questions and Anwers about Login</div>
          <div className="col-9">
            <ul>
              {question?.map((question) => {
                return (
                  <Questions
                    key={question.id}
                    question={question}
                    // showAnswer={showAnswer}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
