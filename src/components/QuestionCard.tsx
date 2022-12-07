import React from 'react'
import { AnswerObject } from '../App'

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
    <div>
        <p>Question: {questionNr} of {totalQuestions}</p>
        <h2 dangerouslySetInnerHTML={{__html: question}}/>
        <div>
          {answers.map(answer => {
            return (
                <div key={answer}>
                    <button value={answer} disabled={Boolean(userAnswer)} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answer}}/>
                    </button>
                </div>
            )
          })}
        </div>
    </div>
  )
}

export default QuestionCard