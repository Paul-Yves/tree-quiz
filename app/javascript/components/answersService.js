import axios from 'axios';

export const sendAnswers = (name, answers) => {
    axios.post('/answers', {name, answers}).then(response => console.log('yay'));
};
