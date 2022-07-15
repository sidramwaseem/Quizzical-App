import React from "react";

function Questions(props) {
  const quizQuestion = props.quizData.map((quizQuestions) => {
    return quizQuestions.question +<br />;
  });
  console.log("questions", quizQuestion)
  return (
    <div>
      <p>{quizQuestion}</p>
    </div>
  );
}

export default Questions;
