import React, {useState, useEffect} from "react";
import AddQuestionForm from "./AddQuestionForm"
import GenerateQuestionForm from "./GenerateQuestionForm";
import NavBar from "./NavBar";
import FavoriteQuestions from "./FavoriteQuestions";

function App() {
  const [favoriteQuestions, setFavoriteQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/Favorites')
    .then(r => r.json())
    .then(data => setFavoriteQuestions(data))
  }, [setFavoriteQuestions])

  function handleAddFavorite(newFavorite) {
    setFavoriteQuestions([...favoriteQuestions, newFavorite])
}


  return (
    <div className="App">
      <NavBar />
      <GenerateQuestionForm handleAddFavorite={handleAddFavorite}/>
      <AddQuestionForm />
      <FavoriteQuestions favoriteQuestions={favoriteQuestions} setFavoriteQuestions={setFavoriteQuestions}/>
    </div>
  )
}

export default App;
