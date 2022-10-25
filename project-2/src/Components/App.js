import React from "react";
import AddQuestionForm from "./AddQuestionForm"
import GenerateQuestionForm from "./GenerateQuestionForm";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <GenerateQuestionForm />
      <AddQuestionForm />
    </div>
  );
}

export default App;
