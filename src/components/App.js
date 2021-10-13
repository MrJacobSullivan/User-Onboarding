import { useState } from 'react'
import axios from 'axios'
import Form from './Form'

const initialTeam = []

export default function App() {
  const [team, setTeam] = useState(initialTeam)

  const postMember = (newMember) => {
    axios
      .post('https://reqres.in/api/users', newMember)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.error(err))
      .finally(() => {})
  }

  const onSubmit = (newMember) => {
    postMember(newMember)
  }

  return (
    <div>
      <h1>Onboarding</h1>
      <Form submit={onSubmit} />
    </div>
  )
}
