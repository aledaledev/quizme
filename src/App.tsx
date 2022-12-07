import { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { fetchQuestions, Difficulty, QuestionState } from './service/api'

type AnswerObject = {
  question: string;
  answer: string;
  correct :boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10

function App() {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  //console.log(fetchQuestions(10,Difficulty.EASY));
  console.log(questions);

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)
    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

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
      {/*<QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswer?userAnswer[number]:undefined}
        callback={checkAnswer}
      />*/}
      <button onClick={nextQuestion}>Next question</button>
    </div>
  )
}

export default App
