import React, {useState} from "react";
import AnswerDetails from "./AnswerDetails";


function QuestionCard({questionData, handleAddFavorite}) {
    
    const [isShown, setIsShown] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    const {category, difficulty, question, correct_answer} = questionData

    
    // function to show Answer

    function handleClick() {
        setIsShown((isShown) => !isShown)
    }

    // Submit function to POST to Favorites
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

    //changes the wording on the Save button to show if question is saved
    
    function handleChange() {
        setIsSaved((isSaved) => !isSaved)
    }

    // code to replace the symbols for " & '

    let fixOne = question.replace(/(&quot;|")/g, function(match){
            return match === '&quot;' ? '"' : '"';
        })
    
    let fixTwo = fixOne.replace(/(&#039;|')/g, function(match){
        return match === '&#039;' ? "'" : "'";
    })

    let fixThree = fixTwo.replace(/(&ldquo;|")/g, function(match){
        return match === '&ldquo;' ? '"' : '"';
    })

    let fixFour = fixThree.replace(/(&rdquo;|")/g, function(match){
        return match === '&rdquo;' ? '"' : '"';
    })

    let finalQuestionFix = fixFour.replace(/(&amp;|&)/g, function(match){
        return match === '&amp;' ? '&' : '&';
    })
    // end of code to handle replacements

    return(
        <div className="generated-questions">
            <p>Question: {finalQuestionFix}</p>
            <p>Category: {category}</p>
            <p>difficulty: {difficulty}</p>
            <button className="save-button" onClick={addToFavorites} >
                <p onClick={handleChange}>{isSaved ? "Saved!" : 'Save!'}</p>
            </button>
            <AnswerDetails handleClick={handleClick} isShown={isShown} correct_answer={correct_answer}/>
        
        </div>
    )
}

export default QuestionCard