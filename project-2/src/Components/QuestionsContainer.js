import React from "react";
import QuestionCard from './QuestionCard';

function QuestionsContainer({randomQuestions}) {
console.log(randomQuestions)
const questionsList = randomQuestions.map((question) => {
    return <QuestionCard key={question.id} questionData={question}/>
})
    
    return(
        <>
            {questionsList}
        </>
    )
}

export default QuestionsContainer