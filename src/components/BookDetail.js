import axios from 'axios'
import { useEffect, useState } from 'react'

export const BookDetail = ({ token, bookId }) => {
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
  }, [bookId, token])

  return (
    <>
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
