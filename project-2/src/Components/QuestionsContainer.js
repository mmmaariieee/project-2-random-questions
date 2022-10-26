import React from "react";
import QuestionCard from './QuestionCard';

function QuestionsContainer({randomQuestions, handleAddFavorite}) {
const questionsList = randomQuestions.map((question) => {
    return <QuestionCard key={question.id} questionData={question} handleAddFavorite={handleAddFavorite}/>
})
    
    return(
        <div className='questionsDiv'>
            {questionsList}
        </div>
    )
}

export default QuestionsContainer