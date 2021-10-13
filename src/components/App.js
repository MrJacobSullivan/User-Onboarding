import { useState } from 'react'
import axios from 'axios'
import Form from './Form'

const initialTeam = []

export default function App() {
  const [team, setTeam] = useState(initialTeam)

  const addMember = (newMember) => {
    axios
      .post('https://reqres.in/api/users', newMember)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.error(err))
      .finally(() => {})
  }

  const onSubmit = () => {}

  return (
    <div>
      <h1>Onboarding</h1>
      <Form submit={onSubmit} />
    </div>
  )
}
