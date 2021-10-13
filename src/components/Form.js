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

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target
    const actualValue = type === 'checkbox' ? checked : value

    validate(name, actualValue)

    setValues((prev) => ({ ...prev, [name]: actualValue }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Team Member</h2>

      <div>
        <h4>Information</h4>

        <div>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>

        <label>
          Name
          <input type='text' name='name' value={values.name} onChange={handleChange} />
        </label>

        <label>
          Email
          <input type='email' name='email' value={values.email} onChange={handleChange} />
        </label>

        <label>
          Password
          <input type='password' name='password' value={values.password} onChange={handleChange} />
        </label>

        <label>
          Terms of Service
          <input type='checkbox' name='tos' checked={values.tos} onChange={handleChange} />
        </label>

        <button>submit</button>
      </div>
    </form>
  )
}
