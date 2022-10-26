import React from "react";

function MyQuestionCard({questionInfo, removeQuestion}) {
    const {id, category, question, answer} = questionInfo

    function handleDelete() {
        fetch(`http://localhost:4001/MyQuestions/${id}`, {
            method: "Delete",
        })
        removeQuestion(id)
    }



    return (
        <div>
            <h3>Question:</h3>
            <p>{category}</p>
            <p>{question}</p>
            <p>{answer}</p>
            <button onClick={handleDelete}>Remove</button>
        </div>
    )
}

export default MyQuestionCard