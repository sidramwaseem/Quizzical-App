import React from "react";
import Questions from "./components/Questions.jsx";

function App() {
  const [quizData, setQuizData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  console.log(quizData);
  return (
    <div>
      <h5>sup</h5>
      <Questions quizData={quizData} />
    </div>
  );
}

export default App;
