import { BookList } from './components/BookList'
import { BookDetail } from './components/BookDetail'
import { Login } from './components/Login'

import './App.css'
import axios from 'axios'
import useLocalStorageState from 'use-local-storage-state'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const App = () => {
  const [token, setToken] = useLocalStorageState('libraryToken', null)
  const [username, setUsername] = useLocalStorageState('libraryUsername', '')

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
            <span className="tag is-info is-light">
              Hello, you're logged in as {username}
            </span>
          </div>
        )}
          <BrowserRouter>
            <nav>
              <ul>
                <li><Link to={"/books"}>Book List</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/books" element={<BookList token={token} isLoggedIn={isLoggedIn} />} />
              <Route path="/books/:bookId" element={<BookDetail token={token} />} />
              <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setAuth={setAuth}/>} />
            </Routes>
          </BrowserRouter>

      </main>
    </>
  )
}

export default App
