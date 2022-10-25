import React, {useState} from "react";
import AnswerDetails from "./AnswerDetails";


function QuestionCard({questionData, handleAddFavorite}) {
    const [isShown, setIsShown] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const {category, difficulty, question, correct_answer} = questionData

    function handleClick() {
        setIsShown((isShown) => !isShown)
    }

    function addToFavorites() {
        const newFavorite = {
            category: category,
            difficulty: difficulty,
            question: question,
            correct_answer: correct_answer,
        }
        fetch('http://localhost:3001/Favorites', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFavorite)
        })
        .then(r => r.json())
        .then(data => handleAddFavorite(data))
    }

    function handleChange() {
        setIsFavorite((isFavorite) => !isFavorite)
    }

    return(
        <div>
            <p>{question}</p>
            <p>{category}</p>
            <p>{difficulty}</p>
            <button onClick={addToFavorites} >
                <p onClick={handleChange}>{isFavorite ? "Saved!" : 'Save!'}</p>
            </button>
            <AnswerDetails handleClick={handleClick} isShown={isShown} correct_answer={correct_answer}/>
        </div>
    )
}

export default QuestionCard