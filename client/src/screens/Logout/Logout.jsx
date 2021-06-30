import { useEffect } from 'react'
import { signOut } from '../../services/users'
import { useHistory } from 'react-router-dom'

const Logout = (props) => {
  const { setUser } = props
  const history = useHistory()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      history.push('/comics')
    }
    signOutUser()
  }, [history, setUser])

  return ''
}

export default Logout
