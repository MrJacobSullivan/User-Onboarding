import Form from './Form'

export default function App() {
  const onSubmit = () => {}

  return (
    <div>
      <h1>Onboarding</h1>
      <Form submit={onSubmit} />
    </div>
  )
}
