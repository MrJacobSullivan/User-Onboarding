import { useState } from 'react'

const initialValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}

const initialErrors = {
  name: '',
  email: '',
  password: '',
  tos: '',
}

export default function Form({ submit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)

  const validate = (name, value) => {}

  const inputChange = (event) => {
    const { name, value, checked, type } = event.target
    const actualValue = type === 'checkbox' ? checked : value

    validate(name, actualValue)

    setValues((prev) => ({ ...prev, [name]: actualValue }))
  }

  const handleSubmit = () => {}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Team Member</h2>

      <div>
        <h4>Information</h4>

        <label>
          Name
          <input type='text' />
        </label>

        <label>
          Email
          <input type='email' />
        </label>

        <label>
          Password
          <input type='password' />
        </label>

        <label>
          Terms of Service
          <input type='checkbox' />
        </label>

        <button>submit</button>
      </div>
    </form>
  )
}
