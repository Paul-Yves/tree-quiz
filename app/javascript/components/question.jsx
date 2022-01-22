import React from 'react';

const Question = ({question, doAnswer}) => {
    return <div className="max-w-lg mx-auto mt-16 text-center rounded shadow-lg p-10 bg-gray-300">
        <h2 className={"mb-16"}>{question.label}</h2>
        <div>
            {
                question.answers.map((answer) => {
                    return <button key={answer.button} onClick={() => doAnswer(question.label, answer)}
                                   className={'rounded bg-green-600 mr-16 p-4 hover:bg-green-800'}>
                        {answer.button}
                    </button>
                })
            }
        </div>
    </div>
};

export default Question;
