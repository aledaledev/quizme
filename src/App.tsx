import { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { fetchQuestions, Difficulty, QuestionState } from './service/api'

export type AnswerObject = {
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
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  //console.log(fetchQuestions(10,Difficulty.EASY));

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)
    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
      )
      console.log(newQuestions);
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      const answer = e.currentTarget.value
      const correct = questions[number].correct_answer === answer
      if(correct) setScore(prev => prev + 1)
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev,answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  //font-family: 'Poppins', sans-serif;
  //https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple

  return (
    <div>
      <h1>Quizme time!</h1> 
      {gameOver || userAnswers.length === TOTAL_QUESTIONS?
      <button onClick={startTrivia}>Start</button>:null}
      {!gameOver?<p>score: {score}</p>:null} 
      {!loading && !gameOver?
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers?userAnswers[number]:undefined}
        callback={checkAnswer}
      />
      :null
      }
      {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1? 
      <button onClick={nextQuestion}>Next question</button>:null}
      {loading?<p>Loading Quiz...</p>:null}
    </div>
  )
}

export default App
