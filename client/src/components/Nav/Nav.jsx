import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { userContext } from '../../utils/Context'

const Nav = () => {
  const [menu, setMenu] = useState('closed');
  const user = useContext(userContext)
  const handleChange = () => {
    if (menu === 'closed') {
      setMenu('open');
    } else {
      setMenu('closed');
    }
  }

  return (
    <nav>
      <div className="nav-div">
        <div className="logo-holder">
          <NavLink to="/"><h2 className="logo">AKEA COMICS</h2></NavLink>
        </div>

        <div className='drop-down-menu'>
          <i className="fas fa-bars" onClick={handleChange} />
          <div className={`drop-down-menu-${menu}`}>
            <a href='/' className={`drop-down-menu-links`} >Home</a>
            <a href='/comics' className={`drop-down-menu-links`} >Browse</a>
            <a href='/login' className={`drop-down-menu-links`} >Login</a>
            <a href='/signup' className={`drop-down-menu-links`}>Sign Up</a>
          </div>
        </div>

        <div className="link-holder">
          <NavLink className="nav-link" to="/comics">Browse</NavLink>
          {user ? (<NavLink className="nav-link" to="/create-comic">Create</NavLink>) : (<NavLink className="nav-link" to="/signup">Create</NavLink>)}
          {user ? (<div className="nav-link">Welcome {user.username}</div>) : (<NavLink className="nav-link" to="/signup">Sign Up</NavLink>)}
          {user ? (<NavLink user={user} className="nav-user-link" to="/change-password">Change Password</NavLink>) : (null)}
          {user ? (<NavLink user={user} className="nav-user-link" to={`/users/${user?.id}/wishlist`}>Wishlist</NavLink>) : (null)}
          {user ? (<NavLink className="nav-link" to="/logout">Logout</NavLink>) : (<NavLink className="nav-link" to="/login">Login</NavLink>)}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
