import Questions from "./Questions";
import data from "./data";
import "./App.css";
import { useState } from "react";

function App() {
  const [question] = useState(data);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-3">Questions and Anwers about Login</div>
          <div className="col-9">
            <ul>
              {question?.map((question) => {
                return <Questions key={question.id} question={question} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
