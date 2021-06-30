// import './Nav.css'
import { NavLink } from 'react-router-dom'
import { Logout } from '../../screens/Logout/Logout'



const alwaysOptions = (
    <>
        <NavLink className="link" to="/">Home</NavLink>
        <br/>
        <NavLink className="link" to="/create-comic">Create</NavLink>
        <br/>
        <NavLink className="link" to="/comic-details">Details</NavLink>
        <br/>
        <NavLink className="link" to="/edit-comic">Edit</NavLink>
        <br />
        <NavLink className="link" to="/signup">Sign-Up</NavLink>
        <br />
        <NavLink className="link" to="/login">Login</NavLink>
        <br />
        <NavLink className="link" to="/logout">Logout</NavLink>
        <br/>
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