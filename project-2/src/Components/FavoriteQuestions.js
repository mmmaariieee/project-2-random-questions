import React, {useEffect, useState} from "react";
import FavoriteCard from "./FavoriteCard";

function FavoriteQuestions() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/Favorites')
        .then(r => r.json())
        .then(data => setFavorites(data))
    })

    function removeFavorite(id) {
        const newFavorites = favorites.filter((question) => question.id !== id)
        setFavorites(newFavorites)
    }

    const favoritesList = favorites.map((favorite) => {
        return <FavoriteCard key={favorite.id} favorite={favorite} removeFavorite={removeFavorite}/>
    })
    return (
        <div>{favoritesList}</div>
    )
}


export default FavoriteQuestions 