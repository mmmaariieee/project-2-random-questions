import React, {useState, useEffect} from "react";
import QuestionsContainer from  './QuestionsContainer';

function GenerateQuestionForm() {
    const [generatedQuestions, setGeneratedQuestions] = useState([])

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10')
        .then(r => r.json())
        .then(data => setGeneratedQuestions(data.results))
    }, [])

    return (
        <div>
            <form>
                <label>Category:</label>
                <select>
                    <option value="">Any Category</option>
                    <option value="">General Knowledge</option>
                    <option value="">Books</option>
                    <option value="">Film</option>
                    <option value="">Music</option>
                    <option value="">Musicals & Theatres</option>
                    <option value="">Television</option>
                    <option value="">Video Games</option>
                    <option value="">Board Games</option>
                    <option value="">Science & Nature</option>
                    <option value="">Computers</option>
                    <option value="">Mathematics</option>
                    <option value="">Mythology</option>
                    <option value="">Sports</option>
                    <option value="">Geography</option>
                    <option value="">History</option>
                    <option value="">Politics</option>
                    <option value="">Art</option>
                    <option value="">Celebrities</option>
                    <option value="">Animals</option>
                </select>

                <label>Difficulty:</label>
                <select>
                    <option value="">Random</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <label>Number of questions:</label>
                <input name="numberOfQuestions"/>
                <input type="submit" />
            </form>
            <QuestionsContainer randomQuestions={generatedQuestions}/>
        </div>
    )
}

export default GenerateQuestionForm;