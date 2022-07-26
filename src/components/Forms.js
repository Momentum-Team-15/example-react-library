import { useState, useRef } from 'react'

// A controlled form input -- form values are in state
export const InputField = () => {
  const [name, setName] = useState('')

  const handleChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  return (
    <>
      <div className="input-field">
        <label>Name</label>
        <input type="text" onChange={handleChange} value={name} />
      </div>
      <div>
        <p>Hi hello {name}!</p>
      </div>
    </>
  )
}

// uncontrolled form input -- we use a hook called useRef()

export const RefInput = () => {
  const input = useRef()
  const logValue = () => {
    console.log(`Input contains: ${input.current.value}`)
  }

  return (
    <div>
      <h2>Ref input</h2>
      <input type="text" ref={input} />
      <button onClick={logValue}>Log the Value!</button>
    </div>
  )
}
