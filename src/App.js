import useLocalStorageState from 'use-local-storage-state'
import Login from './components/Login'
import { BookList } from './components/BookList'

const App = () => {
  //use local storage to keep this token hanging around
  const [token, setToken] = useLocalStorageState('reactLibraryToken', '')
  const [username, setUsername] = useLocalStorageState(
    'reactLibraryUsername',
    ''
  )

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
        <h1>Books</h1>
      </header>
      <BookList token={token} />
    </>
  )
}

export default App
