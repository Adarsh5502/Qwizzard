import React, { useState } from 'react'
import './Quiz.css'

const Quiz = () => {
    // 1. Data: You can move this to a separate file later
    const questions = [
        {
            question: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
            answer: "JavaScript"
        },
        {
            question: "What does CSS stand for?",
            options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
            answer: "Cascading Style Sheets"
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='quiz-container'>
            {showScore ? (
                <div className='score-section'>
                    <h2>You scored {score} out of {questions.length}!</h2>
                    <button onClick={() => window.location.reload()}>Try Again</button>
                </div>
            ) : (
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>
                        {questions[currentQuestion].question}
                    </div>
                    <div className='answer-options'>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Quiz