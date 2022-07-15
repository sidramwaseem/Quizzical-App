import React from "react";

function Questions(props) {
  const quizQuestion = props.quizData.map((quizQuestions) => <div>{quizQuestions.question}</div>);
  console.log("questions", quizQuestion)
  return (
    <div>
      {quizQuestion}
    </div>
  );
}

export default Questions;
