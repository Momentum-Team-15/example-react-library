import axios from 'axios'
import { useEffect, useState } from 'react'

export const BookDetail = ({ bookId, handleGoBack }) => {
  const [book, setBook] = useState(null)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/books/${bookId}`, {}).then((res) => {
      setBook(res.data)
    })
  }, [bookId])

  return (
    <>
      <button onClick={handleGoBack}> Go Back to All Books </button>
      {book && (
        <>
          <div className="book content container-box" id={book.pk}>
            <h2>{book.title}</h2>
            <div className="details">
              <p>{book.author}</p>
              <p>{book.publication_year}</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
