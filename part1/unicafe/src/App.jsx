import { useState } from 'react'

const StatisticLine = ({text, value}) => {
return(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
}

const Statistics = ({good, neutral, bad}) => {
  const N = good+neutral+bad
  if (N==0) {
    return (
      <div>
        <p>No Feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <tr>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='average' value={(good-bad)/N} />
        <StatisticLine text='positive [%]' value={100*good/N} />
      </tr>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)


  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App