import React from "react";
import AddQuestionForm from "./Components/AddQuestionForm";
import GenerateQuestionForm from "./Components/GenerateQuestionForm";
import NavBar from "./Components/NavBar";

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
