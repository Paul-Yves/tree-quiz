import React, {useState} from 'react';
import quiz from './quiz';
import Question from './question';
import EndQuestion from './endQuestion';
import {sendAnswers} from './answersService';

const App = () => {
    const [name, setName] = useState('');
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState(null);
    const startquiz = () => {
        if (name !== '') {
            setQuestion(quiz['first']);
        }
    }
    const doAnswer = (questionLabel, answer) => {
        const updatedAnswers = [...answers, [questionLabel, answer.button]];
        const nextQuestion = quiz[answer.target];
        if (nextQuestion.answers === undefined) {
            updatedAnswers.push(nextQuestion.label);
            sendAnswers(name, updatedAnswers);
            console.log('sending', name, updatedAnswers)
        }
        setAnswers(updatedAnswers);
        setQuestion(nextQuestion);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    if (question !== null) {
        return question.answers ? <Question question={question} doAnswer={doAnswer} /> : <EndQuestion question={question}/>
    }

    return (
        <div className="max-w-3xl mx-auto mt-16 text-center max-w-sm rounded shadow-lg p-10 bg-gray-300">
            <h1 className={"mb-16"}>Bienvenue sur Ebichu quiz</h1>

            <label>Nom : </label>
            <input name={'name'} type={'text'} value={name} onChange={handleNameChange}
                   className={'px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring'}/>
            <button onClick={startquiz} className={'rounded bg-green-600 ml-16 p-4 hover:bg-green-800'}>Suivant</button>
        </div>
    )
}

export default App;
