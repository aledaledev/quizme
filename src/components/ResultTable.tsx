import React from 'react'
import { Results } from './ResultTable.styles'

const ResultTable = () => {
  return (
    <div>
        <h2>Result</h2>
        <Results>
            <thead>
                <tr>
                    <th>Question</th>
                    <th>My answer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>Lorem, ipsum.</td>
                </tr>
            </tbody>
        </Results>
    </div>
  )
}

export default ResultTable