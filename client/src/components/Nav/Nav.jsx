import "./Nav.css";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line
import { Logout } from "../../screens/Logout/Logout";
// eslint-disable-next-line
{/* <NavLink to="/edit-comic">Edit</NavLink> */ }


const Nav = ({ user }) => {

  return (
    <nav>
      <div className="nav">
        <NavLink to="/comics">Home</NavLink>
        <br />
        {user ? (<NavLink className="create" to="/create-comic">Create</NavLink>) : (<NavLink className="create-greyed-out" to="/signup">Create</NavLink>)}
        <br />
        {user ? `Welcome, ${user.username}` : <NavLink to="/signup">Sign Up Now</NavLink>}
        <br />
        {user ? <NavLink to="/logout">Logout</NavLink> : <NavLink to="/login">Login</NavLink>}
      </div>
    </nav>
  );
};
export default Nav;
