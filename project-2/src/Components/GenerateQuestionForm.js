import React from "react";

function GenerateQuestionForm() {
    return (
        <div>
            <form>
                <label>Category:</label>
                <select>
                    <option value=""></option>
                </select>

                <label>Difficulty:</label>
                <select>
                    <option value=""></option>
                </select>

                <label>Number of questions:</label>
                <select>
                    <option value=""></option>
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}

export default GenerateQuestionForm;