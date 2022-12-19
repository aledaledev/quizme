import React from 'react'
import { useQuiz } from '../context/QuizContext'
import { AnswerObject } from '../types'
import { Results } from './ResultTable.styles'

const ResultTable = () => {

    const {userAnswers} = useQuiz()

  return (
    <div style={{
        maxWidth:"65rem"
    }}>
        <h2 style={{
            color:'white',
            fontSize:"3rem",
            textAlign:"center"
                
        }}>Results</h2>
        <Results>
            <thead>
                <tr>
                    <th>Question</th>
                    <th>My answer</th>
                    <th>Correct answer</th>
                </tr>
            </thead>
            <tbody>
                {userAnswers.map(({question,answer,correctAnswer}:AnswerObject) => {
                    return (
                        <tr key={question}>
                            <td>{question}</td>
                            <td>{answer}</td>
                            <td>{correctAnswer}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Results>
    </div>
  )
}

export default ResultTable