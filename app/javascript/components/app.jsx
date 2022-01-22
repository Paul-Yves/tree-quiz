import React, {useState} from 'react';
import quizz from './quizz';
import Question from './question';

const App = () => {
    const [name, setName] = useState('');
    const [question, setQuestion] = useState(null);
    const startQuizz = () => {
        if (name !== '') {
            setQuestion(quizz['first']);
        }
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    if (question !== null) {
        return <Question question={question} setQuestion={setQuestion} />
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
