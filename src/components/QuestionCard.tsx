import React from 'react'

type Props = {
    question: string,
    answers: string[],
    callback: any,
    userAnswer: any,
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
                <div>
                    <button disabled={userAnswer} onClick={callback}>
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