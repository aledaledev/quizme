import React from 'react'
import { AnswerObject } from '../App'
import {CardWrapper } from './QuestionCard.styles'

type Props = {
    question: string,
    answers: string[],
    callback: (e:React.MouseEvent<HTMLButtonElement>)=> void,
    userAnswer: AnswerObject | undefined,
    questionNr: number,
    totalQuestions: number 
}

//react functional component
const QuestionCard:React.FC<Props> = ({question,answers,callback,userAnswer,questionNr,totalQuestions}) => {
  return (
    <CardWrapper>
        <p>Question: <span>{questionNr}</span> of <span>{totalQuestions}</span></p>
        <h2 dangerouslySetInnerHTML={{__html: question}}/>
        <div className='grid'>
          {answers.map(answer => {
            return (
                <div key={answer} className='option'>
                    <button value={answer} disabled={Boolean(userAnswer)} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answer}}/>
                    </button>
                </div>
            )
          })}
        </div>
    </CardWrapper >
  )
}

export default QuestionCard