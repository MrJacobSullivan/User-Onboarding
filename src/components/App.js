import { useState } from 'react'
import axios from 'axios'
import { Main, Container } from './Styled'
import Form from './Form'

const initialTeam = []

export default function App() {
  const [team, setTeam] = useState(initialTeam)

  const postMember = (newMember) => {
    axios
      .post('https://reqres.in/api/users', newMember)
      .then((res) => {
        const data = res.data
        setTeam((prev) => [
          {
            name: data.name,
            email: data.email,
            id: data.id,
          },
          ...prev,
        ])
      })
      .catch((err) => console.error(err))
      .finally(() => {})
  }

  const onSubmit = (newMember) => {
    postMember(newMember)
  }

  return (
    <Main>
      <Container>
        <h1>Onboarding</h1>
        <Form submit={onSubmit} />

        <div>
          {team.map((member) => (
            <div key={member.id}>
              <p>{member.name}</p>
              <p>{member.email}</p>
            </div>
          ))}
        </div>
      </Container>
    </Main>
  )
}
