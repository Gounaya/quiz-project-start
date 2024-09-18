import {useState} from 'react';

import QUESTIONS from './questions.js'
;
const Quiz = () => {

    const [answers, setAnswers] = useState([]);
    const activeQuestionIndex = answers.length;

    const handleSelectAnswer = (selectedAnswer) => {
        setAnswers([...answers, selectedAnswer]);
    };

    return (
        <div id='quiz'>
            <div id="question">
                <h2> {QUESTIONS[activeQuestionIndex].text} </h2>

                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Quiz;