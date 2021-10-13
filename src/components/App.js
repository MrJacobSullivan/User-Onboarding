import { useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form'
import schema from '../validation/schema'

const initialTeam = []

export default function App() {
  const [team, setTeam] = useState(initialTeam)

  const onSubmit = () => {}

  return (
    <div>
      <h1>Onboarding</h1>
      <Form submit={onSubmit} />
    </div>
  )
}
