import axios from 'axios'
import { useState } from 'react'
export const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    setError(null)
    // when the form submits, make an ajax request to the login endpoint
    // capture the auth token in state
    axios
      .post('http://127.0.0.1:8000/api/auth/token/login/', {
        username: username,
        password: password,
      })
      .then((res) => {
        setAuth(username, password)
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  return (
    <>
      <h2>Hello I am the Login Form</h2>
      {error && <div className="error">{error}</div>}
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="form-controls">
          <label htmlFor="username-field">username</label>
          <input
            id="username-field"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </div>
        <div className="form-controls">
          <label htmlFor="password-field">password</label>
          <input
            id="password-field"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <div className="form-submit">
          <input type="submit" value="Log In" />
        </div>
      </form>
    </>
  )
}
