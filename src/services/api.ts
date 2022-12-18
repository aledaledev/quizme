import { Difficulty, Question } from '../types'
import { shuffleArray } from './utils'

export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endPoint)).json()
    //const json = await data.json()
    return data.results.map((question:Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}