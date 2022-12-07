import { shuffleArray } from './utils'


export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answer: string[],
    question:string,
    type:string
}

export type QuestionState = Question & {answer: string[]}

export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endPoint)).json()
    //const json = await data.json()
    return data.results.map((question:Question) => (
        {
            ...question,
            answer: shuffleArray([...question.incorrect_answer, question.correct_answer])
        }
    ))
}