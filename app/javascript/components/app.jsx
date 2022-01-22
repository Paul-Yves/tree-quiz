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
        <div>
            <h1>Bienvenu sur Ebichu quiz</h1>

            <input name={'name'} type={'text'} value={name} onChange={handleNameChange} />
            <button onClick={startquiz}>Suivant</button>
        </div>
    )
}

export default App;
