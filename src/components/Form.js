export default function Form() {
  return (
    <form>
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
