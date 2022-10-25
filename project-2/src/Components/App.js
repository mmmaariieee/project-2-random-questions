import React from "react";
import AddQuestionForm from "./AddQuestionForm"
import GenerateQuestionForm from "./GenerateQuestionForm";
import NavBar from "./NavBar";
import FavoriteQuestions from "./FavoriteQuestions";

function App() {
  return (
    <div className="App">
      <NavBar />
      <GenerateQuestionForm />
      <AddQuestionForm />
      <FavoriteQuestions />
    </div>
  )
}

export default App;
