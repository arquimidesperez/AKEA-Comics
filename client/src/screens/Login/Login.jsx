import './Login.css'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'
import { Layout } from "../../components";
import { useState, useContext } from "react";
import { setUserContext } from '../../utils/Context'


const Login = () => {
  const setUser = useContext(setUserContext)
  const history = useHistory()

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await signIn(form)
      setUser(user)
      history.push('/comics')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'Invalid Login' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit' className='login-button'>LOGIN</button>
    }
  }

  const { email, password } = form

  return (
    <Layout>
      <div className='login-container'>

        <div className='login-form'>

          <p className='login-form-header'>LOGIN</p>

          <form onSubmit={onLogin}>

            <div className='login-email-div'>
              <input className='login-email-input'
                required
                type='text'
                name='email'
                value={email}
                placeholder='Email'
                onChange={handleChange}
              />
            </div>

            <div className='login-password-div'>
              <input className='login-password-input'
                required
                name='password'
                value={password}
                type='password'
                placeholder='Password'
                onChange={handleChange}
              />
            </div>

            {renderError()}

          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login