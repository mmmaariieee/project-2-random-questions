import React from "react";

function AnswerDetails({handleClick, isShown, correct_answer}){
    return(
        <button className="answer-button" onClick={handleClick}>
            <div  name='Answer' placeholder='Answer' >{isShown ? correct_answer : "Show Answer"}</div>
        </button>
    )
}

export default AnswerDetails