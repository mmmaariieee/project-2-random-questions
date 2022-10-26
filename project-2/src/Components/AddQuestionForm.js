import React, {useState} from "react";

function AddQuestionForm() {
    const [inputtedData, setInputtedData] = useState('')
    const [myQuestions, setMyQuestions] = useState([])

    function updateMyQuestions(newQuestion) {
        setMyQuestions([...myQuestions, newQuestion])
    }

    function handleInput(e) {
        const {name, value} = e.target
        setInputtedData({
            ...inputtedData, [name]: value,
        })
    }

    function addQuestion(e) {
        e.preventDefault()
        const newQuestion = {
            category: inputtedData.category,
            question: inputtedData.question,
            answer: inputtedData.answer
        }
        fetch('http://localhost:4001/MyQuestions', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newQuestion)
        })
        .then(r => r.json())
        .then(data => updateMyQuestions(data))
    }

    return (
        <div>
        <h1>Add A Question</h1>
        <div className="AddQuestionForm">
            <form onSubmit={addQuestion}>
            <label>Category:</label>
                <br />
                <input type="text" name="category" onChange={handleInput}/>
                <br />
                <label>Question:</label>
                <br />
                <input type="text" name="question" onChange={handleInput}/>
                <br />
                <label>Answer:</label>
                <br />
                <input type="text" name="answer" onChange={handleInput}/>
                <br />
                <input type="submit" />
            </form>
        </div>
        </div>
    )
}

export default AddQuestionForm;