import axios from 'axios'
import { useEffect, useState } from 'react'

export const BookDetail = ({ bookId, handleGoBack, token }) => {
  const [book, setBook] = useState(null)

  useEffect(() => {
    axios
      .get(`https://drf-library-api.herokuapp.com/api/books/${bookId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
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
