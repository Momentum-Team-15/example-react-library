import { BookList } from './components/BookList'
import './App.css'

const App = () => {
  return (
    <>
      <header className="header">
        <h1 className="is-size-1">Books</h1>
      </header>
      <BookList />
    </>
  )
}

export default App
