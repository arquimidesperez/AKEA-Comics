import "./App.css";
import { useState, useEffect } from "react";
import Home from "./screens/Home/Home";
import ComicBrowse from "./screens/ComicBrowse/ComicBrowse";
// eslint-disable-next-line
import ComicCreate from "./screens/ComicCreate/ComicCreate";
import ComicEdit from "./screens/ComicEdit/ComicEdit";
import ComicDetail from "./screens/ComicDetail/ComicDetail";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";
import SignUp from "./screens/SignUp/SignUp";
import Login from "./screens/Login/Login";
import Logout from "./screens/Logout/Logout";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

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
      </Switch>
    </div>
  );
};

export default App;
