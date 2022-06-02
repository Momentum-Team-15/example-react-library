import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  // put this in state to get going before the API is ready
  const [questions, setQuestions] = useState([
    {
      pk: 1,
      title: 'What is a panda?',
      body: 'I really must know.',
      created_at: 'June 1, 2022',
    },
    {
      pk: 2,
      title: 'How smart is my chihuahua?',
      body: 'I really must know.',
      created_at: 'June 2, 2022',
    },
  ])

  // eventually I will want to make an AJAX request to the API to get the questions
  // Then I can set them in state
  // useEffect(() => {
  //   axios
  //     .get('http://qb-api-url.herokuapp.com')
  //     .then((response) => setQuestions(response.data))
  // })

  return (
    <>
      <header className="header">
        <h1>Books</h1>
      </header>
      <NavBar />
      {questions.map((question) => (
        <Question {...question} />
      ))}
    </>
  )
}

// These components should probably be in its own file but it's here just for demo purposes
const Question = (props) => {
  return (
    <div
      className="question-card"
      style={{ margin: '15px', border: '2px solid purple' }}
    >
      <h1> {props.title} </h1>
      <div className="question-info">
        <p>{props.body}</p>
      </div>
    </div>
  )
}

const NavBar = () => {
  return <h1>I am the Navbar!</h1>
}

export default App
