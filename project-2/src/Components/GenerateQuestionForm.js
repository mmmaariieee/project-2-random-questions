import React, {useState, useEffect} from "react";
import QuestionsContainer from  './QuestionsContainer';

function GenerateQuestionForm() {
    const [generatedQuestions, setGeneratedQuestions] = useState([])
    const [formData, setFormData] = useState('')

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
                return {...question, favorite: false, id: Math.random()}
            })
            setGeneratedQuestions(newGeneratedQuestions)
        })
    }

    // useEffect(() => {
    //     fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
    //     .then(r => r.json())
    //     .then(data => {
    //         const newGeneratedQuestions = data.results.map(question => {
    //             return {...question, favorite: false, id: Math.random()}
    //         })
    //         setGeneratedQuestions(newGeneratedQuestions)
    //     })
    // }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Category:</label>
                <select name='category' onChange={handleChange}>
                    <option value="">Any Category</option>
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
                <select name='difficulty' onChange={handleChange}>
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <label>Number of questions:</label>
                <input name="numberOfQuestions" onChange={handleChange}/>
                <input type="submit" />
            </form>
            <QuestionsContainer randomQuestions={generatedQuestions}/>
        </div>
    )
}

export default GenerateQuestionForm;