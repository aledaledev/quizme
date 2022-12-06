import { useState } from 'react'
import QuestionCard from './components/QuestionCard'

const TOTAL_QUESTIONS = 10

function App() {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, seNumber] = useState(0)
  const [userAnswer, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const startTrivia = () => {}

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) => {}

  const nextQuestion = () => {}

  //font-family: 'Poppins', sans-serif;
  //https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple

  return (
    <div>
      <h1>Quizme time!</h1> 
      <button onClick={startTrivia}>Start</button>
      <p>score: </p>
      <p>Loading Quiz...</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswer?userAnswer[number]:undefined}
        callback={checkAnswer}
      />
      <button onClick={nextQuestion}>Next question</button>
    </div>
  )
}

export default App
