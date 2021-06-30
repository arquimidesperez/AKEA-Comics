import { useState } from 'react'
import './SignUp.css'
import { signUp } from '../../services/users'
import { useHistory, Link } from 'react-router-dom'

const SignUp = (props) => {
  //can be changed to a redirect 
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      //makes an object so they aren't isolated data pieces
      ...form,
      //pushes it back into a single object
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    //sets user to be a props from App.jsx
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      //pushes the user to the /comics page when signed-up
      history.push('/comics')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'Invalid Sign-Up' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign Up</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <div className='form-container'>
      <h3>Sign Up</h3>
      <form onSubmit={onSignUp}>
        <label>Username</label>
        <input
          required
          type='text'
          name='username'
          value={username}
          placeholder='Enter username'
          onChange={handleChange}
        />
        <label>Email address</label>
        <input
          required
          type='email'
          name='email'
          value={email}
          placeholder='Enter email'
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <label>Password Confirmation</label>
        <input
          required
          name='passwordConfirmation'
          value={passwordConfirmation}
          type='password'
          placeholder='Confirm Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
      <button>
      Already have an account?<Link to='/login'>Login</Link>
      </button>

    </div>
  )
}

export default SignUp
