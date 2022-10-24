import React from "react";


function QuestionCard({questionData}) {

    const {category, difficulty, question, favorite} = questionData

    return(
        <div>
            <p>{question}</p>
            <p>{category}</p>
            <p>{difficulty}</p>
            <p>{favorite ? null : 'Save!'}</p>
        </div>
    )
}

export default QuestionCard