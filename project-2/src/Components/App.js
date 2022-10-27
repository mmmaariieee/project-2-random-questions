import React, {useState, useEffect} from "react";
import AddQuestionForm from "./AddQuestionForm"
import GenerateQuestionForm from "./GenerateQuestionForm";
import NavBar from "./NavBar";
import FavoriteQuestions from "./FavoriteQuestions";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from '/home/adrielpuello/Development/Code/phase-2/project-2-random-questions/project-2/src/logo.png'

// import topBarImage from '/home/trevor14/Development/code/project-2/project-2-random-questions/project-2/src/robotic top bar picture.png'

function App() {
  const [favoriteQuestions, setFavoriteQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/Favorites')
    .then(r => r.json())
    .then(data => setFavoriteQuestions(data))
  }, [setFavoriteQuestions])

  function handleAddFavorite(newFavorite) {
    setFavoriteQuestions([newFavorite, ...favoriteQuestions])
}


  return (
  <div className="App">
    <BrowserRouter>
    <img className="logo" src={logo} alt="logo"/>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<GenerateQuestionForm handleAddFavorite={handleAddFavorite}/>}/>
        <Route path="/AddQuestions" element={<AddQuestionForm />}/>
        <Route path="/FavoriteQuestions" element={<FavoriteQuestions favoriteQuestions={favoriteQuestions} setFavoriteQuestions={setFavoriteQuestions}/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;