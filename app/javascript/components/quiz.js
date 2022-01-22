const quiz = {
    first: {
        label: 'shabu shabu ?',
        answers: [
            {button: 'picho picho', target: 'second'},
            {button: 'gugna gugna', target: 'third'},
        ]
    },
    second: {
        label: 'Ola ola',
        answers: [
            {button: 'Ulthar', target: 'third'},
            {button: 'Mirza', target: 'fourth'},
        ]
    },
    third: {
        label: 'chizu'
    },
    fourth: {
        label: 'Soup'
    }
};
export default quiz;
