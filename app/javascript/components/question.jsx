import React from 'react';
import quizz from './quizz';

const Question = ({question, setQuestion}) => {
    return <div>
        <h2>{question.label}</h2>
        <div>
            {
                question.answers.map((answer) => {
                    return <button index={answer.button} onClick={() => setQuestion(quizz[answer.target])}>
                        {answer.button}
                    </button>
                })
            }
        </div>
    </div>
};

export default Question;
