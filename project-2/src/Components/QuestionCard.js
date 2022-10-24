import React from "react";


function QuestionCard({questionData}) {

    const {category, difficulty, question} = questionData

    return(
        <div>
            <p>{question}</p>
            <p>{category}</p>
            <p>{difficulty}</p>
        </div>
    )
}

export default QuestionCard