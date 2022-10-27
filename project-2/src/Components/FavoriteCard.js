import React from "react";

function FavoriteCard({favorite, removeFavorite}) {
    const {category, correct_answer, difficulty, question, id} = favorite

    function handleDelete() {
        fetch(`http://localhost:3001/Favorites/${id}`, {
            method: "Delete",
        })
        removeFavorite(id)
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

    return (
        <div className="generated-questions">
            <p>Question:</p>
            <p>{category}</p>
            <p>{difficulty}</p>
            <p>{finalQuestionFix}</p>
            <p>{correct_answer}</p>
            <button className="save-button" onClick={handleDelete}>Remove</button>
        </div>
    )
}

export default FavoriteCard