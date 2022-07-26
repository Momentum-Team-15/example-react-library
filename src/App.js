import { useState } from 'react'
import { BookList } from './components/BookList'
import './App.css'
import { Login } from './components/Login'

const App = () => {
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState('')

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const isLoggedIn = username && token

  if (!isLoggedIn) {
    return <Login setAuth={setAuth} />
  }

  return (
    <>
      <header className="header">
        <h1 className="is-size-1">Books</h1>
      </header>
      <div className="logged-in-message">
        Hello, you're logged in as {username}
      </div>
      <BookList token={token} />
    </>
  )
}

export default App
