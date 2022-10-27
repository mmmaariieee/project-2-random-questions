import React from "react";

function FavoriteCard({favorite, removeFavorite}) {
    const {category, correct_answer, difficulty, question, id} = favorite

    function handleDelete() {
        fetch(`http://localhost:3001/Favorites/${id}`, {
            method: "Delete",
        })
        removeFavorite(id)
    }



    return (
        <div className="generated-questions">
            <p>Question:</p>
            <p>{category}</p>
            <p>{difficulty}</p>
            <p>{question}</p>
            <p>{correct_answer}</p>
            <button className="save-button" onClick={handleDelete}>Remove</button>
        </div>
    )
}

export default FavoriteCard