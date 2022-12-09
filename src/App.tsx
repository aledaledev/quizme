import { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { fetchQuestions, Difficulty, QuestionState } from './service/api'
import {GlobalStyle, Wrapper} from './App.styles'
import { MoonLoader } from 'react-spinners'

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

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <h1>Quizme!</h1> 
      {gameOver || userAnswers.length === TOTAL_QUESTIONS?
      <button className='start' onClick={startTrivia}>Start</button>:null}
      
      {!loading && !gameOver?
      <>
      <p className='score'>score: {score}</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers?userAnswers[number]:undefined}
        callback={checkAnswer}
      />
      </>
      :null
      }
      {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1? 
      <button className='next' onClick={nextQuestion}>Next question</button>:null}
      {loading?<MoonLoader
        className='spinner'
        color="#cfa6db"
        loading
        size={70}
        speedMultiplier={0.8}
        />:null}
    </Wrapper>
    </>
  )
}

export default App
