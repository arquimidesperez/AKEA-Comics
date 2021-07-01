import "./Nav.css";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line
import { Logout } from "../../screens/Logout/Logout";
// eslint-disable-next-line
{/* <NavLink to="/edit-comic">Edit</NavLink> */ }

/**
 * Want the Welcome, User to be the same size; slight issue where it appears smallers
 */

const Nav = ({ user }) => {

  return (
    <nav>
      <div className="nav-div">
      <div className="nav-spacing">
        <NavLink className='nav-link logo' to="/">AKEA COMICS</NavLink>
        </div>
        <div className="nav-spacing">
        <NavLink className='nav-link' to="/comics">Browse</NavLink>
        </div>
        <div className="nav-spacing">
        {user ? (<NavLink className="nav-link nav-create" to="/create-comic">Create</NavLink>) : (<NavLink className="nav-link create-greyed-out" to="/signup">Create</NavLink>)}
        </div>
        <div className="nav-spacing">
        {user ? `Welcome, ${user.username}` : <NavLink className='nav-link' to="/signup">Sign Up Now</NavLink>}
        </div>
        <div className="nav-spacing">
        {user ? <NavLink className='nav-link' to="/logout">Logout</NavLink> : <NavLink className='nav-link' to="/login">Login</NavLink>}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
