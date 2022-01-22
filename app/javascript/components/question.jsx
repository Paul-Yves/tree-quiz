import React from 'react';

const Question = ({question, doAnswer}) => {
    return <div className="box question">
        <h2 >{question.label}</h2>
        <div>
            {
                question.answers.map((answer) => {
                    return <button key={answer.button} onClick={() => doAnswer(question.label, answer)}>
                        {answer.button}
                    </button>
                })
            }
        </div>
    </div>
};

export default Question;
