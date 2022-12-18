import QuestionCard from './components/QuestionCard'
import {GlobalStyle, Wrapper} from './App.styles'
import { MoonLoader } from 'react-spinners'
import { useQuiz } from './context/QuizContext'

function App() {

  const {gameOver, userAnswers, TOTAL_QUESTIONS, startTrivia, loading, checkAnswer, nextQuestion,number, score, questions} = useQuiz()

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
