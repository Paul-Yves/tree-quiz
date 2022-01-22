import React from 'react';

const EndQuestion = ({question}) => {
    return <div className="max-w-lg mx-auto mt-16 text-center rounded shadow-lg p-10 bg-gray-300">
        <h1>{question.label}</h1>
    </div>
}
export default EndQuestion;
