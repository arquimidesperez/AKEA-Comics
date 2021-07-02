import "./App.css";
import { useState, useEffect } from "react";
import Home from "./screens/Home/Home";
import ComicBrowse from "./screens/ComicBrowse/ComicBrowse";
import ComicCreate from "./screens/ComicCreate/ComicCreate";
import ComicEdit from "./screens/ComicEdit/ComicEdit";
import ComicDetail from "./screens/ComicDetail/ComicDetail";
import { Route, Switch, Redirect } from "react-router-dom";
// import { verifyUser } from "./services/users";
import SignUp from "./screens/SignUp/SignUp";
import Login from "./screens/Login/Login";
import Logout from "./screens/Logout/Logout";
import Purchase from "./screens/Purchase/Purchase";
import { changePassword, verifyUser } from "./services/users";



const App = () => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({});


  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    // changePassword(form);
    const testPassword = await changePassword(form);
    console.log(testPassword);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create-comic">
          {user ? <ComicCreate user={user} /> : <Redirect to="/comics" />}
        </Route>
        <Route exact path="/comics/:id">
          <ComicDetail user={user} />
        </Route>
        <Route exact path="/edit-comic/:id">
          {user ? <ComicEdit user={user} /> : <Redirect to="/signup" />}
        </Route>
        <Route exact path="/comics">
          <ComicBrowse user={user} />
        </Route>
        <Route exact path="/signup">
          <SignUp setUser={setUser} />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route exact path="/logout">
          <Logout setUser={setUser} />
        </Route>
        <Route exact path="/purchase/:id">
          <Purchase user={user} />
        </Route>
        <Route exact path="/change-password">
          <form onChange={handleChange} onSubmit={handleSubmit}>
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="Old Password" name="oldPassword" />
            <input type="text" placeholder="New Password" name="newPassword" />
            <button>Submit</button>
          </form>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
