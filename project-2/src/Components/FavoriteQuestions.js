import React from "react";
import FavoriteCard from "./FavoriteCard";

function FavoriteQuestions({favoriteQuestions, setFavoriteQuestions}) {
    function removeFavorite(id) {
        const newFavorites = favoriteQuestions.filter((question) => question.id !== id)
        setFavoriteQuestions(newFavorites)
    }

    const favoritesList = favoriteQuestions.map((question) => {
        return <FavoriteCard key={question.id} favorite={question} removeFavorite={removeFavorite}/>
    })
    return (
        <div className="favoriteCard">{favoritesList}</div>
    )
}


export default FavoriteQuestions 