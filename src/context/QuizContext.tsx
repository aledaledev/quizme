import { createContext, useContext, useState } from "react";
import { fetchQuestions } from "../services/api";
import { AnswerObject, Difficulty, QuestionState, QuizContextType, QuizProviderProps } from "../types";

const TOTAL_QUESTIONS = 10

const QuizContext = createContext({} as QuizContextType)

export function useQuiz () {
    return useContext(QuizContext)
}

export function QuizProvider ({children}:QuizProviderProps){

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)
    //fetcheamos el question incluyendo y ademas la modificamos para que nos de tambien las posibles respuestas 
    const newQuestions:QuestionState[] = await fetchQuestions(
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

    return <QuizContext.Provider value={{startTrivia, checkAnswer, nextQuestion, loading, number, userAnswers, score, gameOver, TOTAL_QUESTIONS, questions}}>
        {children}
    </QuizContext.Provider>
}