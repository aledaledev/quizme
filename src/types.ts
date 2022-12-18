import { ReactNode } from "react";

export type AnswerObject = {
    question: string;
    answer: string;
    correct :boolean;
    correctAnswer: string; 
}

export type Props = {
    question: string,
    answers: string[],
    callback: (e:React.MouseEvent<HTMLButtonElement>)=> void,
    userAnswer: AnswerObject | undefined,
    questionNr: number,
    totalQuestions: number 
}

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question:string,
    type:string
}

export type QuestionState = Question & {answers: string[]}

export type QuizProviderProps = {
    children: ReactNode
}

export type QuizContextType = {
    startTrivia: () => void,
    checkAnswer: (e:React.MouseEvent<HTMLButtonElement>) => void,
    nextQuestion: () => void,
    loading: boolean, 
    number: number, 
    questions: QuestionState[], 
    userAnswers:AnswerObject[],
    score:number, 
    gameOver:boolean, 
    TOTAL_QUESTIONS:number
}