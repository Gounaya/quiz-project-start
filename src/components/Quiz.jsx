import {useCallback, useState} from 'react';
import completeQuizImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer';

import QUESTIONS from './questions.js';

const Quiz = () => {

    const [answers, setAnswers] = useState([]);
    const activeQuestionIndex = answers.length;


    const quizComplete = activeQuestionIndex === QUESTIONS.length;


    const handleSelectAnswer = useCallback ( function handleSelectAnswer(selectedAnswer) {
        setAnswers([...answers, selectedAnswer]);
        console.log([...answers, selectedAnswer]);
    }, []);  

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizComplete) {
        return (
            <div id='summary'>
                <img src={completeQuizImg} alt="Quiz complete Icon" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

 
    return (
        <div id='quiz'>
            <div id="question">
                <QuestionTimer 
                    timeout={10000} 
                    onTimeout={handleSkipAnswer} 
                />
                <h2> {QUESTIONS[activeQuestionIndex].text} </h2>

                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
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