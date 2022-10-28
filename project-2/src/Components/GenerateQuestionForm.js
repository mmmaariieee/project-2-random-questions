import React, {useState} from "react";
import QuestionsContainer from  './QuestionsContainer';

function GenerateQuestionForm({handleAddFavorite}) {

    const [generatedQuestions, setGeneratedQuestions] = useState([])
    const [formData, setFormData] = useState('')
    

    // Functions for submit from Generate Question Form
    function handleChange(e) {
        const {name, value} = e.target
        setFormData({
            ...formData, [name]: value,
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`https://opentdb.com/api.php?amount=${formData.numberOfQuestions}&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`)
        .then(r => r.json())
        .then(data => {
            const newGeneratedQuestions = data.results.map(question => {
                return {...question, id: Math.random()}
            })
            setGeneratedQuestions(newGeneratedQuestions)
            
        })
    }
    
    function tenRandomQuestions() {
        fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
        .then(r => r.json())
        .then(data => {
            const newGeneratedQuestions = data.results.map(question => {
                return {...question, favorite: false, id: Math.random()}
            })
            setGeneratedQuestions(newGeneratedQuestions)
        })
    }

    return (
        <div>
            <h1>Trivia Question Generator!</h1>
            <div className="GenerateQuestionDiv">
                <form className="GenerateQuestionForm" onSubmit={handleSubmit}>
                    <label>Category:</label>
                    <select className="custom-select" name='category' onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Books</option>
                        <option value="11">Film</option>
                        <option value="12">Music</option>
                        <option value="13">Musicals & Theatres</option>
                        <option value="14">Television</option>
                        <option value="15">Video Games</option>
                        <option value="16">Board Games</option>
                        <option value="17">Science & Nature</option>
                        <option value="18">Computers</option>
                        <option value="19">Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                    </select>

                    <label>Difficulty:</label>
                    <select className="custom-select" name='difficulty' onChange={handleChange}>
                        <option value="">Select Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>

                    <label>Number of questions:</label>
                    <input className="form-input" name="numberOfQuestions" placeholder="1 - 50 Questions" onChange={handleChange}/>
                    <input className="submit-button" type="submit" />
                </form>
                <h3 className="or">OR</h3>
                <button className="tenQuestionsButton" onClick={tenRandomQuestions}>Get 10 Random Questions!</button>
                <QuestionsContainer randomQuestions={generatedQuestions} handleAddFavorite={handleAddFavorite} />
            </div>
        </div>
    )
}

export default GenerateQuestionForm;