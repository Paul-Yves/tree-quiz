import React, {useState} from 'react';
import quizz from './quizz';
import Question from './question';
import EndQuestion from './endQuestion';

const App = () => {
    const [name, setName] = useState('');
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState(null);
    const startQuizz = () => {
        if (name !== '') {
            setQuestion(quizz['first']);
        }
    }
    const doAnswer = (questionLabel, answer) => {
        const updatedAnswers = [...answers, [questionLabel, answer.button]];
        const nextQuestion = quizz[answer.target];
        if (nextQuestion.answers === undefined) {
            updatedAnswers.push(nextQuestion.label);
        }
        setAnswers(updatedAnswers);
        console.log('answers', updatedAnswers);
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
            <h1>Bienvenu sur Ebichu Quizz</h1>

            <input name={'name'} type={'text'} value={name} onChange={handleNameChange} />
            <button onClick={startQuizz}>Suivant</button>
        </div>
    )
}

export default App;
