import React from "react";
import MyQuestionCard from "./MyQuestionsCard";

function MyQuestions({myQuestions, removeQuestion}) {
    const questionList = myQuestions.map((question) => {
    return <MyQuestionCard key={question.id} questionInfo={question} removeQuestion={removeQuestion}/>
})
    return(
        <div className="myQuestionCard">
            {questionList}
        </div>
    )
}

export default MyQuestions