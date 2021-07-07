import { signOut } from '../../services/users'
import { useHistory } from 'react-router-dom'
import { useEffect, useContext } from "react";
import { setUserContext } from '../../utils/Context'


const Logout = (props) => {
  const setUser = useContext(setUserContext)
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
