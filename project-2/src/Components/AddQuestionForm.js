import React from "react";

function AddQuestionForm() {
    return (
        <div>
            <form>
                <label>Question:</label>
                <br />
                <input type="text" name="Question"/>
                <br />
                <label>Answer:</label>
                <br />
                <input type="text" name="Answer"/>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddQuestionForm;