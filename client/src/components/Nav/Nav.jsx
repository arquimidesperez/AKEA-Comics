import "./Nav.css";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line
import { Logout } from "../../screens/Logout/Logout";

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav-div">
        <div className="logo-holder">
          <NavLink  to="/"><h2 className="logo">AKEA COMICS</h2></NavLink>
        </div>
        <div className='drop-down-menu'>
        <i class="fas fa-bars"/>
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
          {user ? (
            <NavLink user={user} className="nav-link" to="/change-password">
            Change Password
          </NavLink>            
          ) : (
            null
          )}

        </div>
      </div>
    </nav>
  );
};
export default Nav;
