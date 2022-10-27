import React, {useState, useEffect} from "react";
import MyQuestions from "./MyQuestions";

function AddQuestionForm() {
    
    const [inputtedData, setInputtedData] = useState('')
    const [myQuestions, setMyQuestions] = useState([])


    // fetch for questions inputted from AddQuestionForm

    useEffect(() => {
        fetch('http://localhost:4001/MyQuestions')
        .then(r => r.json())
        .then(data => setMyQuestions(data))
    }, [setMyQuestions])

    // Removing questions function for delete request
    function removeQuestion(id) {
        const newMyQuestions = myQuestions.filter((question) => question.id !== id)
        setMyQuestions(newMyQuestions)
    }


    //  functions to handle post request and update myQuestions array
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

    function updateMyQuestions(newQuestion) {
        setMyQuestions([newQuestion, ...myQuestions])
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
        <MyQuestions myQuestions={myQuestions} removeQuestion={removeQuestion}/>
        </div>
    )
}

export default AddQuestionForm;