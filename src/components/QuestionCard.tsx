import React from 'react'
import { Props } from '../types'
import {CardWrapper } from './QuestionCard.styles'

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