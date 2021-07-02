import "./Nav.css";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line
import { Logout } from "../../screens/Logout/Logout";

/**
 * Want the Welcome, User to be the same size; slight issue where it appears smallers
 */

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav-div">
        <div className="logo-holder">
          <NavLink  to="/"><h2 className="logo">AKEA COMICS</h2></NavLink>
        </div>
        <div className="link-holder">
          <NavLink className="nav-link" to="/comics">
            Browse
          </NavLink>

          {user ? (
            <NavLink className="nav-link" to="/create-comic">
              Create
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/signup">
              Create
            </NavLink>
          )}


          {user ? (
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          )}
          {user ? (
            `Welcome ${user.username}!`
          ): (
            <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
