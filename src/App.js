import { useState } from 'react'
import { BookList } from './components/BookList'
import { Login } from './components/Login'
import './App.css'
import axios from 'axios'

const App = () => {
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState('')

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const handleLogout = () => {
    // send request to log out on the server
    axios
      .post(
        'https://drf-library-api.herokuapp.com/api/auth/token/logout',
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() =>
        // log out in React
        setAuth('', null)
      )
  }

  const isLoggedIn = username && token

  if (!isLoggedIn) {
    return <Login setAuth={setAuth} />
  }

  return (
    <>
      <header className="header is-flex is-justify-content-space-between">
        🔖 BookList
        {isLoggedIn && (
          <nav>
            <button className="button" onClick={handleLogout}>
              Log Out
            </button>
          </nav>
        )}
      </header>
      <main className="container main">
        {isLoggedIn && (
          <div className="logged-in-message mt-2">
            <span class="tag is-info is-light">
              Hello, you're logged in as {username}
            </span>
          </div>
        )}

        <BookList token={token} isLoggedIn={isLoggedIn} />
      </main>
    </>
  )
}

export default App
