import { useState, useContext } from 'react'
import './SignUp.css'
import { signUp } from '../../services/users'
import { useHistory, Link } from 'react-router-dom'
import { Layout } from "../../components";
import { setUserContext } from '../../utils/Context';

const SignUp = () => {
  const setUser = useContext(setUserContext)
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
      return <button className='signup-button' type='submit'>SIGN UP</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <Layout>
      <div className='signup-container'>

        <div className='signup-form'>

          <p className='signup-form-header'>SIGN UP</p>

          <form onSubmit={onSignUp}>

            <div className='signup-username-div'>
              <input className='signup-username-input'
                required
                type='text'
                name='username'
                value={username}
                placeholder='Username'
                onChange={handleChange}
              />
            </div>

            <div className='signup-email-div'>
              <input className='signup-email-input'
                required
                type='email'
                name='email'
                value={email}
                placeholder='Email'
                onChange={handleChange}
              />
            </div>

            <div className='signup-password-div'>
              <input className='signup-password-input'
                required
                name='password'
                value={password}
                type='password'
                placeholder='Password'
                onChange={handleChange}
              />
            </div>

            <div className='confirm-password-div'>
              <input className='confirm-password-input'
                required
                name='passwordConfirmation'
                value={passwordConfirmation}
                type='password'
                placeholder='Confirm Password'
                onChange={handleChange}
              />
            </div>
            {renderError()}

            <p className='account-ask'>Already have an account?</p>
            <button className='signup-login-button'>
              <Link className='signup-to-login-link' to='/login'>Login</Link>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp
