// import './Nav.css'
import { NavLink } from 'react-router-dom'



const alwaysOptions = (
  <>
      <NavLink className="link" to="/">Home</NavLink>
  </>
)
//user removed as props from const Nav
const Nav = () => {
  return (
      <nav>
          <div className="nav">
              <div className="links">
                  {/* {user && <div className="link welcome">Welcome, {user.username}</div>} */}
                  {alwaysOptions}
                  {/* {user ? authenticatedOptions : unauthenticatedOptions} */}
              </div>
          </div>
      </nav>
  )
}
export default Nav